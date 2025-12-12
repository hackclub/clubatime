CREATE TYPE "public"."approval_status" AS ENUM('unsubmitted', 'pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TABLE "project" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"owner_id" text NOT NULL,
	"hackatime_ids" integer[] DEFAULT ARRAY[]::INTEGER[] NOT NULL,
	"self_reported_hours" integer,
	"status" "approval_status" DEFAULT 'unsubmitted',
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "project_name_idx" ON "project" USING btree ("name");--> statement-breakpoint
CREATE INDEX "project_status_idx" ON "project" USING btree ("status");