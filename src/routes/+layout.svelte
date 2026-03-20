<script lang="ts">
import "$lib/styles/app.css";
import favicon from "$lib/assets/favicon.svg";
import Navbar from "$lib/components/navbar.svelte";
import Sidebar from "$lib/components/sidebar.svelte";
import { sidebar } from "$lib/stores/sidebar.svelte";

const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Clubatime</title>
</svelte:head>

<div class="app-shell" class:sidebar-collapsed={sidebar.collapsed}>
  <div class="app-navbar">
    <Navbar />
  </div>
  <div class="app-sidebar">
    <Sidebar />
  </div>
  <main class="app-main">
    {@render children()}
  </main>
</div>
