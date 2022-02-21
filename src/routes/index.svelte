<script context="module" lang="ts">
import KoFi from "$lib/sections/KoFi.svelte";
import Investigator from "$lib/sections/Investigator.svelte";
import GitLab from "$lib/sections/GitLab.svelte";
import GitHub from "$lib/sections/GitHub.svelte";
import Twitter from "$lib/sections/Twitter.svelte";
import Email from "$lib/sections/Email.svelte";
const headline="lumphammer projects";
import About from "$lib/sections/About.svelte";
import Instagram from "$lib/sections/Instagram.svelte";
</script>

<script lang="ts">
</script>

<style>
	p {
		margin: 1em 0;
	}
</style>


<svelte:head>
	<title>lumphammer.net</title>
</svelte:head>

<h1 data-text={headline}>
	{headline}
</h1>

<p>
	This is my personal projects site. Yes the moiré effect is deliberate. It's cool.
</p>

<div class="grid">
	<KoFi/>
	<Investigator />
	<GitLab/>
	<GitHub/>
	<Twitter/>
	<Instagram />
	<About/>
	<Email/>
</div>

<hr/>
<!-- {#if showLorem}
	<button on:click={toggleLorem}>Hide Lorem</button>
{:else}
	<button on:click={toggleLorem}>Show Lorem</button>
{/if}

{#if showLorem}
	<Lorem />
{/if} -->
