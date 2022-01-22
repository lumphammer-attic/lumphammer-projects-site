<script lang="ts">
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

<!-- <div class="backdrops">
	<div class="backdrop1" ></div>
	<div class="backdrop2" ></div>
	<div class="backdrop3" ></div>
</div> -->

<!-- <Nav /> -->

<main class="container">
	<slot />
</main>

<!-- <footer>
</footer> -->

<div class="page-scroller">
</div>




