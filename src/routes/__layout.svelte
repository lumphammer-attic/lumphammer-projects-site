<script context="module" lang="ts">
// import Nav from "$lib/Nav.svelte";

  import "../stylesheets/main.scss";
  // import Sun16 from "svelte-octicons/lib/Sun16.svelte";
  // import Moon16 from "svelte-octicons/lib/Moon16.svelte";
  // import { browser } from '$app/env';
  // import { afterUpdate } from 'svelte';

  // let scheme = "auto";
  
  // function getPreferedColorScheme() {
  // 	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  // }
  
  // if (browser) {
  // 	scheme = getPreferedColorScheme();
  // }
  
  // console.log({scheme})
  // afterUpdate(() => {
  // 	document.documentElement.setAttribute("data-theme", scheme);
  // });
</script>

<style lang="scss">
  :global(html) {
    font-size: 28px;
    background: #000;
  }
  :global(h1) { font-size: 1.2em; }
  :global(h2) { font-size: 1.1em; }
  :global(h3) { font-size: 1.0em; }
  :global(h4) { font-size: 0.9em; }
  :global(body) {
    padding: 1rem;
    font-family: 'VT323', monospace;
    @media (min-width: 992px) {
      padding: 3rem;
      :global(h1) { font-size: 1.5em; }
      :global(h2) { font-size: 1.3em; }
      :global(h3) { font-size: 1.1em; }
      :global(h4) { font-size: 1.0em; }
    }
  }

  * {
    text-shadow: 0 0 1em currentcolor;
  }

  main {
    max-width: 992px;
    margin: 0 auto;
  }

</style>

<div class="backdrops">
  <div class="backdrop1" ></div>
  <div class="backdrop2" ></div>
  <div class="backdrop3" ></div>
</div>

<!-- <Nav /> -->

<main>
  <slot />
</main>

<!-- <footer>
</footer> -->

<div class="page-scroller">
</div>




