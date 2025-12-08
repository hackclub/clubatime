// See https://svelte.dev/docs/kit/types#app.d.ts

import type { ServerSession, ServerUser } from "$lib/server/auth";

// for information about these interfaces, see https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session?: ServerSession;
			user?: ServerUser;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
