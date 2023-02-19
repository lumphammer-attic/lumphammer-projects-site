<script>
  import Lipsum from './Lipsum.svelte';
  import './styles.css';
  // import Lipsum from '"$lib/components/lipsum.svelte';
</script>

<div class="app">
  <main>
    <slot />
    <input type="text" />
    <Lipsum />
  </main>
  <div class="frontdrops">
    <div class="frontdrop1" />
    <div class="frontdrop2" />
  </div>
</div>

<style lang="scss">
  @use 'sass:math';
  @use 'sass:color';

  * {
    box-sizing: border-box;
  }

  .app {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 100vh;
  }

  main {
    width: 40em;
    /* text-justify: distribute; */
    /* text-align: center; */
    /* line-height: 1.5; */
    /* padding: 1em;
		margin: 1em;
		background: #fff;
		border: 1px solid #000;
		border-radius: 0.5em;
		box-shadow: 0 0 0.5em #000; */
  }

  .frontdrops {
    position: fixed;
    /* border: 3px solid #f00f; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @mixin rotator($duration) {
    animation-name: rotate;
    animation-duration: $duration;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @mixin vt-gradients($alphaMod: 1) {
    $c1: lightgreen;
    $c2: black;
    background-image: radial-gradient(
      circle at 20% 20%,
      color.change($c1, $alpha: (1 * $alphaMod)) 0%,
      color.change(color.mix($c1, $c2), $alpha: (0.5 * $alphaMod)) 80%,
      color.change($c2, $alpha: 0) 100%
    );
  }

  .frontdrop1,
  .frontdrop2 {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 150%;
    min-height: 150%;
    aspect-ratio: 1/1;
    mix-blend-mode: screen;
    background-blend-mode: screen;
  }

  $edge1: #fff6;
  $middle1: #fff3;

  $edge2: #0006;
  $middle2: #0003;

  $strip-width: 7px;

  .frontdrop1 {
    @include rotator(30s);
    /* @include vt-gradients(0.5); */
    background-blend-mode: screen;
    /* background-position: 20% 20%; */
    background: repeating-radial-gradient(
      circle at 150% 150%,
      $middle1,
      $edge1 $strip-width,
      $middle1 $strip-width * 2
    );
    /* background-image: repeating-linear-gradient(
      $middle2,
      $edge2 $strip-width,
      $middle2 $strip-width * 2
    ); */

    /* background-image: linear-gradient(45deg, #f003, #f003 30%, #0f03 33%, #0f03); */
    /* background-blend-mode: screen; */
  }
  .frontdrop2 {
    @include rotator(61s);
    animation-direction: reverse;
    /* background-image: linear-gradient(180deg, #00f3, #00f3 50%, #ff03 55%, #ff03); */
    background-blend-mode: screen;
    background-image: repeating-linear-gradient(
      $middle2,
      $edge2 $strip-width,
      $middle2 $strip-width * 2
    );
  }
</style>
