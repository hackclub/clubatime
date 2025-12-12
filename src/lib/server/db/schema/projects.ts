import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { user } from "./auth";

export const approvalStatusEnum = pgEnum("approval_status", [
  "unsubmitted",
  "pending",
  "approved",
  "rejected",
]);

export type ApprovalStatus = typeof approvalStatusEnum.enumValues[number];

export const project = pgTable(
  "project",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    ownerId: text("owner_id").notNull(),
    hackatimeProjectIds: integer("hackatime_ids")
      .array()
      .notNull()
      .default(sql`ARRAY[]::INTEGER[]`),
    selfReportedHours: integer("self_reported_hours"),
    status: approvalStatusEnum("status").default("unsubmitted"),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("project_name_idx").on(table.name),
    index("project_status_idx").on(table.status),
  ],
);

export const userRelations = relations(project, ({ one }) => ({
  owner: one(user, {
    fields: [project.ownerId],
    references: [user.id],
  }),
}));
