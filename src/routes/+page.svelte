<script lang="ts">
import { getSession, signIn, signOut } from "$lib/auth.remote";
</script>

<div>
  {#if await getSession()}
    <div>
      <p>
        {(await getSession())?.user.name}
      </p>
      <form {...signOut}>
        <button>
            Sign Out
        </button>
      </form>
    </div>
  {:else}
    <form {...signIn}>
        <button>Sign in with HCA</button>
    </form>
  {/if}
</div>
