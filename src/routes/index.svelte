<script context="module" lang="ts">
// import { browser } from "$app/env";
import KoFi from "$lib/KoFi.svelte";
// export const prerender = true;
// export const hydrate = false;

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>



<section color-scheme="grape" >
	<h1>
		lumphammer.net
	</h1>

	<p>
		This is my personal projects site (I'm not currently looking for new employment, thanks!)
	</p>

	<KoFi />

	<div class="grid">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</div>

</section>

