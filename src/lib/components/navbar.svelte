<script lang="ts">
import { getSession, signIn, signOut } from "$lib/auth.remote";

const session = await getSession();
</script>

<nav>
    <a href="/" class="brand">
        <img
            src="$lib/assests/flag-standalone.svg"
            alt="A red flag with a brown base, and the words &quot;Hack Club&quot; in white inside the flag"
            class="logo"
        />
        <span class="brand-text">Clubatime</span>
    </a>

    <div class="user-area">
        {#if session?.user}
            <span class="username">{session.user.name}</span>
            <form {...signOut}>
                <button type="submit" class="btn btn-secondary">Sign Out</button
                >
            </form>
        {:else}
            <form {...signIn}>
                <button type="submit" class="btn btn-primary">
                    Sign in with Hack Club
                </button>
            </form>
        {/if}
    </div>
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--navbar-height);
        background: var(--color-bg-secondary);
        border-bottom: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        z-index: 100;
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--color-text);
        text-decoration: none;
    }

    .brand:hover {
        text-decoration: none;
    }

    .logo {
        height: 28px;
        width: auto;
    }

    .brand-text {
        font-weight: 600;
        font-size: 1.1rem;
    }

    .user-area {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .username {
        color: var(--color-text-muted);
        font-size: 0.9rem;
    }

    .btn {
        padding: 8px 14px;
        border-radius: var(--radius);
        font-weight: 500;
        font-size: 0.9rem;
        border: none;
        transition: background var(--transition);
    }

    .btn-primary {
        background: var(--color-primary);
        color: white;
    }

    .btn-primary:hover {
        background: var(--color-primary-hover);
    }

    .btn-secondary {
        background: var(--color-bg-tertiary);
        color: var(--color-text);
        border: 1px solid var(--color-border);
    }

    .btn-secondary:hover {
        background: var(--color-border);
    }
</style>
