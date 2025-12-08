import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { genericOAuth } from "better-auth/plugins";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { env } from "$env/dynamic/private";
import { db } from "./db";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: false,
	},
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: "hackclub",
					clientId: env.HACKCLUB_CLIENT_ID,
					clientSecret: env.HACKCLUB_CLIENT_SECRET,
					discoveryUrl:
						"https://auth.hackclub.com/.well-known/openid-configuration",
					scopes: ["openid", "profile", "email", "name", "verification_status"],
				},
			],
		}),
		sveltekitCookies(getRequestEvent),
	],
});

export type ServerSession = typeof auth.$Infer.Session.session;
export type ServerUser = typeof auth.$Infer.Session.user;
