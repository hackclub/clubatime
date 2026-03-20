<script lang="ts">
import { page } from "$app/state";
</script>

<div class="empty-state" style="padding-top: 6rem;">
  <h1 style="font-size: 4rem; margin-bottom: 0.25rem;">{page.status}</h1>
  <h2 style="margin-bottom: 1rem;">{page.error?.message || "Something went wrong"}</h2>
  <p style="margin-bottom: 2rem;">The page you're looking for doesn't exist or something broke.</p>
  <a href="/" class="btn btn-primary">Go Home</a>
</div>
