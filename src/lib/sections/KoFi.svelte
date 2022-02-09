<script lang="ts">
	import { browser } from '$app/env';
  const kofiUrl = "https://ko-fi.com/F1F13NAXL";
  const callToAction = "Buy me a coffee on ko-fi.com!";
</script>

{#if browser}
	<script type="text/javascript" src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"></script>
{/if}

<section class="interactive">
  <a class="linkifier" href={kofiUrl} target="_new">Ko-fi</a>
	<h2 data-text="Tip jar">
    Tip jar
  </h2>

	<p>If you like my work, you can chip in towards running costs*:</p>

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
    background: #ff149277;
    max-width: max-content;
    padding: 0.2em 1em;
    border-radius: 0.2em;
    margin: 1em auto;
    border: 2px solid currentColor;
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

	section {
		--color: #fff;
		--shadow-color: rgb(150, 0, 142);
    --hover-shadow-color: white;
    --h-image: none;
    --h-color: white;
    --glow-color: white;

    background-image: 
      radial-gradient(
        circle at top right,
        #0ff7,
        #0ff0
      ),
      radial-gradient(
        circle at bottom left,
        #ff149277,
        #ff149200
      );
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
