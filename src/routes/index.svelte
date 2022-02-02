<script context="module" lang="ts">
// import { browser } from "$app/env";
import KoFi from "$lib/KoFi.svelte";
import Lorem from "$lib/Lorem.svelte";
import Investigator from "$lib/Investigator.svelte";
// export const prerender = true;
// export const hydrate = false;


</script>

<script lang="ts">
	let showLorem = false;
	
	function toggleLorem (): void {
		showLorem = !showLorem;
	}	
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 data-text="lumphammer">
	lumphammer
</h1>

<p>
	This is my personal projects site (I'm not currently looking for new employment, thanks!)
</p>

<div class="grid">
	<KoFi/>
	<Investigator />
</div>

{#if showLorem}
	<button on:click={toggleLorem}>Hide Lorem</button>
{:else}
	<button on:click={toggleLorem}>Show Lorem</button>
{/if}

{#if showLorem}
	<Lorem />
{/if}
