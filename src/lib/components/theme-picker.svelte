<script lang="ts">
import { theme } from "$lib/stores/theme.svelte";
</script>

<div class="theme-picker" role="radiogroup" aria-label="Theme">
  {#each theme.themes as t}
    <button
      class="theme-dot"
      class:active={theme.current === t}
      data-pick={t}
      onclick={() => (theme.current = t)}
      role="radio"
      aria-checked={theme.current === t}
      aria-label="{t} theme"
    ></button>
  {/each}
</div>
