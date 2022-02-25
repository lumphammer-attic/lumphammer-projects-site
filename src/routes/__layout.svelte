<script context="module" lang="ts">
	import Frontdrops from "$lib/Frontdrops.svelte";
	import "../stylesheets/main.scss";
</script>

<svelte:head>
	<title>lumphammer projects</title>
</svelte:head>

<main>
	<slot />
</main>

<Frontdrops />