import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "$env/dynamic/private";
import * as authSchema from "./schema/auth";
import * as projectsSchema from "./schema/projects";

if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

const client = postgres(env.DATABASE_URL);

export const db = drizzle(client, {
	schema: { ...projectsSchema, ...authSchema },
});
