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
	:global(body) {
		padding: 3em;
		font-family: 'VT323', monospace;
	}
	/* :where(h1) { */

	/* } */
	* {
		/* transition: color 300ms ease-in, background-color 300ms ease-in; */
		text-shadow: 0 0 1em currentcolor;
	}

	p {
		span {
			color: red;
		}
	}

</style>

<div class="backdrops">
	<div class="backdrop1" ></div>
	<div class="backdrop2" ></div>
	<div class="backdrop3" ></div>
</div>

<!-- <Nav /> -->

<main class="container">
	<slot />
</main>

<!-- <footer>
</footer> -->

<div class="page-scroller">
</div>




