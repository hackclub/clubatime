import { genericOAuthClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/svelte";

export const authClient = createAuthClient({
	plugins: [genericOAuthClient()],
});

export type ClientSession = typeof authClient.$Infer.Session.session;
export type ClientUser = typeof authClient.$Infer.Session.user;
