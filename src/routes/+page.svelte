<script lang="ts">
import { getSession } from "$lib/auth.remote";
</script>

<div class="page-header">
  {#if await getSession()}
    {@const session = await getSession()}
    <h1>Welcome back, {session?.user.name}!</h1>
    <p>Submit projects, track your hours, and earn rewards.</p>
  {:else}
    <h1>Clubatime</h1>
    <p>The Hack Club YSWS project submission and hours tracker. Sign in to get started.</p>
  {/if}
</div>

<div style="display: flex; flex-direction: column; gap: 1rem; max-width: 540px;">
  <a href="/submit" class="card" style="text-decoration: none; color: inherit;">
    <h3>Submit a Project</h3>
    <p style="color: var(--text-muted); margin-top: 0.25rem;">
      Share what you've built and earn hours for your work.
    </p>
  </a>

  <a href="/hours" class="card" style="text-decoration: none; color: inherit;">
    <h3>Your Hours</h3>
    <p style="color: var(--text-muted); margin-top: 0.25rem;">
      View your earned hours from approved submissions.
    </p>
  </a>

  <a href="/rewards" class="card" style="text-decoration: none; color: inherit;">
    <h3>Rewards</h3>
    <p style="color: var(--text-muted); margin-top: 0.25rem;">
      Redeem your hours for stickers, hardware, and more.
    </p>
  </a>
</div>
