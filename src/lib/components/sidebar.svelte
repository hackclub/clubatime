<script lang="ts">
import { page } from "$app/state";
import { getSession } from "$lib/auth.remote";

// Check if current path matches
function isActive(path: string): boolean {
	if (path === "/") {
		return page.url.pathname === "/";
	}
	return page.url.pathname.startsWith(path);
}
</script>

<aside class="sidebar">
    <nav class="sidebar-nav">
        <div class="nav-section">
            <span class="nav-label">>Menu</span>
            <a href="/" class="nav-link" class:active={isActive("/")}>
                <svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d=" M3 919-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Home
            </a>
            <a href="/hours" class="nav-link" class:active={isActive("/hours")}
                <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                My Hours
            </a>
            <a href="/submit" class="nav-link" class:active={isActive("/submit")}>
                <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d=="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="12 6 12 12 16 14"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
                Submit Project
            </a>
        </div>

        {#await getSession() then session}
        {#if session?.user}
        <div class="nav-section">
            <span class="nav-label">Club</span>
            <a href="/club" class="nav-link" class:active={isActive("/club")}>
            <svg width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            My Club
            </a>
            <a href="/admin" class="nav-link" class:active={isActive("/admin")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
                Admin
            </a>
        </div>
        {/if}
        {/await}
    </nav>
</aside>

<style>
    .sidebar {
        position: fixed;
        top: var(--navbar-height);

    }
</style>
