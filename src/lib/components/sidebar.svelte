<script lang="ts">
import { page } from "$app/state";
import { getSession } from "$lib/auth.remote";
import { sidebar } from "$lib/stores/sidebar.svelte";

const publicLinks = [
	{
		href: "/",
		label: "Home",
		icon: "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z",
	},
	{ href: "/submit", label: "Submit", icon: "M12 5v14M5 12h14" },
	{
		href: "/hours",
		label: "Hours",
		icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2",
	},
	{
		href: "/rewards",
		label: "Rewards",
		icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
	},
];

const authLinks = [
	{
		href: "/club",
		label: "Club",
		icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
	},
	{
		href: "/admin",
		label: "Admin",
		icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
	},
];

function isActive(href: string): boolean {
	if (href === "/") return page.url.pathname === "/";
	return page.url.pathname.startsWith(href);
}
</script>

{#if !sidebar.collapsed}
  <button
    class="sidebar-backdrop"
    onclick={() => sidebar.close()}
    aria-label="Close sidebar"
  ></button>
{/if}

<aside class="sidebar" class:collapsed={sidebar.collapsed}>
  <ul class="sidebar-nav">
    {#each publicLinks as link}
      <li>
        <a
          href={link.href}
          class="sidebar-link"
          class:active={isActive(link.href)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d={link.icon} />
          </svg>
          {link.label}
        </a>
      </li>
    {/each}

    {#await getSession()}
      <!-- loading -->
    {:then session}
      {#if session}
        {#each authLinks as link}
          <li>
            <a
              href={link.href}
              class="sidebar-link"
              class:active={isActive(link.href)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d={link.icon} />
              </svg>
              {link.label}
            </a>
          </li>
        {/each}
      {/if}
    {/await}
  </ul>
</aside>
