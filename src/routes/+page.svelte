<script lang="ts">
import { authClient } from "$lib/auth";

async function signIn() {
	await authClient.signIn.oauth2({
		providerId: "hackclub",
		callbackURL: "/",
		errorCallbackURL: "/error-page",
		scopes: ["openid", "profile", "email", "name", "verification_status"],
	});
}

// TODO: change this into a page data thing or query, Since we want everything to work without JS
// Signing in will happen through a form button/query
const session = authClient.useSession();
</script>

<div>
  {#if $session.data}
    <div>
      <p>
        {$session.data.user.name}
      </p>
      <button
        onclick={async () => {
          await authClient.signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  {:else}
    <button onclick={signIn}>Sign in with HCA</button>
  {/if}
</div>
