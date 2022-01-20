<script lang="ts">
	import '../app.less';
	import Sun16 from "svelte-octicons/lib/Sun16.svelte";
	import Moon16 from "svelte-octicons/lib/Moon16.svelte";
	import { browser } from '$app/env';
	import { afterUpdate } from 'svelte';

	let scheme = "auto";
	
	function getPreferedColorScheme() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}
	
	if (browser) {
		scheme = getPreferedColorScheme();
	}
	
	console.log({scheme})
	afterUpdate(() => {
		document.documentElement.setAttribute("data-theme", scheme);
	});
</script>

<nav class="container-fluid">
	<ul>
		<li>Lumphammer</li>
	</ul>
	<ul>
		<li>
			<a href="http://github.com/n3dst4">GitHub</a>
		</li>
		<li>
			<a href="http://gitlab.com/n3dst4">GitLab</a>
		</li>
		<li>
			<a href="http://twitter.com/n3dst4">Twitter</a>
		</li>
		<li>
			{#if scheme  === "light" }
				<button class="secondary" title="Use dark mode" on:click={() => { scheme = "dark" }}>
					<Moon16/>
				</button>
			{:else if scheme === "dark"}
				<button class="secondary" title="Use light mode" on:click={() => { scheme = "light" }}>
					<Sun16/>
				</button>
			{:else}
				<button class="secondary" disabled title="Theme switcher disabled">
					<Sun16/>
				</button>
			{/if}
		</li>
	</ul>
	<!-- <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li> -->
</nav>

<main class="container">
	<slot />
</main>


<footer>
</footer>

