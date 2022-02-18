
<div class="crt-effects">
  <div class="noise" />
  <div class="moiré1" />
  <div class="moiré2" />
</div>

<div class="middle-glow"/>


<div class="framing-shadow"/>


<style lang="scss">
  @use "sass:math";
  @use 'sass:color';

  @keyframes rotate {
    0% { transform: translate(-25%, -25%) rotate(0); }
    50% { transform: translate(-25%, -25%) rotate(180deg); }
    100% { transform: translate(-25%, -25%) rotate(360deg); }
  }

  @mixin vt-gradients($alphaMod: 1.0) {
  $c1: lightgreen;
  $c2: black;
  background-image:
    radial-gradient(
      circle at 50% 50%,
      color.change($c1, $alpha: (1.0 * $alphaMod)) 0%,
      color.change(color.mix($c1, $c2), $alpha: (0.5 * $alphaMod)) 80%,
      color.change($c2, $alpha: 0) 100%,
    ),
  }  

  @mixin rotator($duration) {
    width: 300%;
    height: 300%;
    position: absolute;
    animation-name: rotate;
    animation-duration: $duration;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 1;
    pointer-events: none;
    // mix-blend-mode: hard-light; 
  }

  @mixin fixed-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .crt-effects {
    @include fixed-cover();
    mix-blend-mode: hard-light;
    z-index: 1;
    // opacity: 0.5;
    .noise {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: var(--noise-3);
      opacity: 0.2;
    }


    $edge1: #fff6;
    $middle1: #fff3;

    $edge2: #0006;
    $middle2: #0003;

    $strip-width: 7px;

    .moiré1 {
      @include rotator(150s);
      background: repeating-radial-gradient(circle at 150% 150%, $middle1, $edge1 $strip-width, $middle1 $strip-width * 2);
    }

    .moiré2 {
      @include rotator(450s);
      background: repeating-linear-gradient($middle2, $edge2 $strip-width, $middle2 $strip-width * 2);
      animation-direction: reverse;
    }
  }

  .middle-glow {
    @include vt-gradients(1.0);
    @include fixed-cover();
    mix-blend-mode: hard-light;
    z-index: 2;
    opacity: 0.5;
  }


  .framing-shadow {
    @include fixed-cover();
    z-index: 3;
    box-shadow:
      0 0 1em 0.2em #000 inset,
      ;
  }



</style>
