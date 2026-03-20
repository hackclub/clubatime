<script lang="ts">
import { page } from "$app/state";

// Auth errors come through as query params
const error = $derived(
	page.url.searchParams.get("error") || "Authentication failed",
);
const description = $derived(
	page.url.searchParams.get("error_description") ||
		"Something went wrong during sign in.",
);
</script>

<div class="page-header">
  <h1>Authentication Error</h1>
  <p>{error}</p>
</div>

<div class="card" style="max-width: 480px;">
  <p style="margin-bottom: 1.5rem;">{description}</p>
  <a href="/" class="btn btn-primary">Go Home</a>
</div>
