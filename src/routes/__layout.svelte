<script context="module" lang="ts">
	import Frontdrops from '$lib/Frontdrops.svelte';
</script>

<main>
	<slot />
</main>

<Frontdrops />

<style lang="scss">
	@import '../stylesheets/vt-gradients.scss';
	:global(html) {
		font-size: 28px;
		background-color: #000;
		--color: #73e9ad;
		color: var(--color);
    // background-size: 200%;
    max-width: 100%;
    overflow-x: hidden;
	}
	:global(h1) {
		font-size: 1.2em;
	}
	:global(h2) {
		font-size: 1.1em;
	}
	:global(h3) {
		font-size: 1em;
	}
	:global(h4) {
		font-size: 0.9em;
	}
	:global(body) {
		padding: 1rem;
		font-family: 'VT323', monospace;
    background-attachment: fixed;
    max-width: 100%;
    overflow-x: hidden;
		@media (min-width: 992px) {
			padding: 3rem;
			:global(h1) {
				font-size: 1.5em;
			}
			:global(h2) {
				font-size: 1.3em;
			}
			:global(h3) {
				font-size: 1.1em;
			}
			:global(h4) {
				font-size: 1em;
			}
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
