import { redirect } from "@sveltejs/kit";
import { form, getRequestEvent, query } from "$app/server";
import { auth } from "./server/auth";

export const getSession = query(
	async () =>
		await auth.api.getSession({
			headers: getRequestEvent().request.headers,
		}),
);

export const signIn = form(async () => {
	const data = await auth.api.signInWithOAuth2({
		body: {
			providerId: "hackclub",
			callbackURL: "/",
			errorCallbackURL: "/error-page",
		},
		headers: getRequestEvent().request.headers,
	});

	if (data.redirect) {
		redirect(303, data.url);
	}

	await getSession().refresh();
});

export const signOut = form(async () => {
	const { success } = await auth.api.signOut({
		headers: getRequestEvent().request.headers,
	});

	if (success) {
		getSession().set(null);
	}
});
