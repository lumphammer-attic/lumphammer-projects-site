<script context="module" lang="ts">
	import RightArrow from "$lib/RightArrow.svelte";
</script>

<section class="interactive">
	<a href="https://discord.gg" class="linkifier" target="_new"> DISCORD </a>
	<h2 data-text="Lumphammer Discord">Lumphammer Discord</h2>
	<p>
		There is literally no-one on this Discord but me, but we can be friends.
		<RightArrow />
	</p>
</section>

<style lang="scss">
	section {
		// color: #99f;
		// background-image: var(--gradient-13);
		background-image: linear-gradient(
			30deg,
			hsl(0deg 0% 0%) 0%,
			hsl(235deg 19% 34%) 10%,
			hsl(235deg 55% 55%) 17%,
			hsl(271deg 88% 57%) 23%,
			hsl(324deg 96% 53%) 32%,
			hsl(0deg 75% 49%) 45%,
			hsl(0deg 27% 34%) 66%,
			hsl(0deg 0% 0%) 100%
		);
		background-size: cover;
		background-position-y: 70%;
		color: white;
		--glow-color: #fff;
		--color: #fff;
		--h-image: none;
	}
</style>
