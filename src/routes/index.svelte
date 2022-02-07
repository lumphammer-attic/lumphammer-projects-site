<script context="module" lang="ts">
import KoFi from "$lib/KoFi.svelte";
import Lorem from "$lib/Lorem.svelte";
import Investigator from "$lib/Investigator.svelte";
import GitLab from "$lib/GitLab.svelte";
import GitHub from "$lib/GitHub.svelte";
const headline="lumphammer projects"
</script>

<script lang="ts">
	let showLorem = false;
	
	function toggleLorem (): void {
		showLorem = !showLorem;
	}	
</script>

<style>
	p {
		margin: 1em 0;
	}
</style>


<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 data-text={headline}>
	{headline}
</h1>

<p>
	This is my personal projects site (I'm not currently looking for new employment, thanks!)
</p>

<div class="grid">
	<KoFi/>
	<Investigator />
	<GitLab/>
	<GitHub/>
</div>

<hr/>
{#if showLorem}
	<button on:click={toggleLorem}>Hide Lorem</button>
{:else}
	<button on:click={toggleLorem}>Show Lorem</button>
{/if}

{#if showLorem}
	<Lorem />
{/if}
