<script context="module" lang="ts">
	// import Email from "$lib/sections/Email.svelte";
	const headline = 'lumphammer';
</script>

<script lang="ts">
	import { browser } from '$app/env';

	let email = 'neil-at-lumphammer.com';

	if (browser) {
		email = email.replace('-at-', '@');
	}
</script>

<h1 data-text={headline}>
	{headline}
</h1>

<p>
	Hi, I'm Neil de Carteret. Yes the moiré effect is deliberate. I hope it doesn't make your device
	melt.
</p>

<p>
	Tip jar: If you like my work, please consider <a target="_new" href="https://ko-fi.com/n3dst4"
		>buying me a coffee</a
	>.
</p>

<p>
	I maintain the official GUMSHOE system for Foundry VTT: <a
		target="_new"
		href="https://github.com/n3dst4/gumshoe-fvtt">GUMSHOE for Foundry VTT</a
	> (formerly known as INVESTIGATOR).
</p>

<p>
	Instagram: I post photos of my miniatures and cats on
	<a target="_new" href="https://www.instagram.com/n3dst4/">Instagram</a>.
</p>

<p>
	Email: You can email me at
	<a href={`mailto: ${email}`} target="_new">{email}</a> if you like.
</p>

<style>
	p {
		margin: 1em 0;
	}
</style>
