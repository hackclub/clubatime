<script lang="ts">
import flag from "$lib/assets/favicon.svg";
import { getSession, signIn, signOut } from "$lib/auth.remote";
import { sidebar } from "$lib/stores/sidebar.svelte";
import ThemePicker from "./theme-picker.svelte";
</script>

<nav class="navbar">
  <button class="btn-ghost" onclick={() => sidebar.toggle()} aria-label="Toggle sidebar">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <rect x="2" y="4" width="16" height="2" rx="1" />
      <rect x="2" y="9" width="16" height="2" rx="1" />
      <rect x="2" y="14" width="16" height="2" rx="1" />
    </svg>
  </button>

  <a href="/" class="navbar-brand">
    <img src={flag} alt="Hack Club flag" />
    <span>Clubatime</span>
  </a>

  <div class="navbar-spacer"></div>

  <ThemePicker />

  {#if await getSession()}
    {@const session = await getSession()}
    <div class="navbar-user">
      {#if session?.user.image}
        <img src={session.user.image} alt="" />
      {/if}
      <span>{session?.user.name}</span>
    </div>
    <form {...signOut}>
      <button class="btn btn-secondary" style="font-size: 0.8125rem; padding: 0.375rem 0.75rem;">
        Sign Out
      </button>
    </form>
  {:else}
    <form {...signIn}>
      <button class="btn btn-primary" style="font-size: 0.8125rem; padding: 0.375rem 0.75rem;">
        Sign In
      </button>
    </form>
  {/if}
</nav>
