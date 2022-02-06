<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { koFoWidgetAsHTML1, koFoWidgetAsHTML2, koFoWidgetJS } from './koFiWidgetAsHtml';

  const kofiUrl = "https://ko-fi.com/F1F13NAXL";
  const callToAction = "Buy me a coffee on ko-fi.com!";

	// let aTag: HTMLAnchorElement;
	// let kofiWidget: HTMLDivElement;

	// function bootKofi() {
	// 	if (!window.hasOwnProperty('kofiwidget2')) {
	// 		console.log('Waiting...');
	// 		setTimeout(bootKofi, 200);
	// 		return;
	// 	}
	// 	console.log('Booting Ko-Fi...');
	// 	kofiwidget2.init('Support Me on Ko-fi', '#1b7d00', 'F1F13NAXL');
	// 	const html = kofiwidget2.getHTML();
	// 	kofiWidget.innerHTML = html;
	// }

	// onMount(bootKofi);
</script>

{#if browser}
	<script type="text/javascript" src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"></script>
{/if}

<section>
  <a class="linkifier" href={kofiUrl} target="_new">Ko-fi</a>
	<h2 data-text="Tip jar">
    Tip jar
  </h2>

  <!-- <a href={kofiUrl}>
    Tip jar
  </a> -->


	<p>If you like my work, you can chip in towards running costs*:</p>

  <!-- Attempt 1: keep a ref to this div, pull in the 3rd party script, and
    beat it up until we can render the widget here-->
	<!-- <div bind:this={kofiWidget} /> -->

	<div class="kofi-widget">
		<a
			title={callToAction}
			href={kofiUrl}
			target="_blank"
		>
      <img
        src="https://storage.ko-fi.com/cdn/cup-border.png"
        aria-hidden="true"
        alt="Ko-fi logo"
        class="my=ko-fi-img"
      />{" "}{callToAction}</a
		>
	</div>

	<footnote>*: Mainly RPG books, miniatures & whisky</footnote>
</section>

<style lang="scss">

  .kofi-widget {
    text-align: center;
    background: #070;
    width: max-content;
    max-width: 100%;
    padding: 0.2em 1em;
    border-radius: 0.2em;
    margin: 0 auto;
    &:hover {
      a {
        text-decoration: underline;
      }
    }
    a {
      color: white;
      text-decoration: none;
      img {
        display: inline;
        animation: kofi-wiggle 3s infinite;
        height: 15px;
        width: 22px
      }
    }
  }

  // * {

  // }

	section {
		--color: #fff;
    // color: var(--color);
		background-image: var(--gradient-3);
		--shadow-color: rgb(150, 0, 142);
    --h-image: none;
    --h-color: white;
    --glow-color: white;
		box-shadow: 0em 0em 0.5em 0.1em var(--shadow-color);
		transition: transform 50ms ease-in-out;
		&:hover {
			--shadow-color: var(--color);
			// box-shadow: 0em 0em 0.5em 0.1em var(--color);
			transform: scale(1.01);
		}
	}

  @keyframes kofi-wiggle {
    0% {
      transform: rotate(0) scale(1)
    }
    60% {
      transform: rotate(0) scale(1)
    }
    75% {
      transform: rotate(0) scale(1.12)
    }
    80% {
      transform: rotate(0) scale(1.1)
    }
    84% {
      transform: rotate(-10deg) scale(1.1)
    }
    88% {
      transform: rotate(10deg) scale(1.1)
    }
    92% {
      transform: rotate(-10deg) scale(1.1)
    }
    96% {
      transform: rotate(10deg) scale(1.1)
    }
    100% {
      transform: rotate(0) scale(1)
    }
  }


</style>
