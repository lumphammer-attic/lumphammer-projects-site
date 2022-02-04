<div class="backdrops">
  <div class="backdrop1" />
  <div class="backdrop2" />
  <div class="backdrop3" />
</div>

<style lang="scss">
  @use 'sass:color';
  @import '../stylesheets/vt-gradients.scss';

  @keyframes rotate {
    0% { transform: translate(-25%, -25%) rotate(0); }
    50% { transform: translate(-25%, -25%) rotate(180deg); }
    100% { transform: translate(-25%, -25%) rotate(360deg); }
  }

  @mixin frontdrop {
    width: 200%;
    height: 200%;
    position: absolute;
    animation-name: rotate;
    animation-duration: 150s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: hard-light;
    
  }
  $edge1: #fff1;
  $middle1: #fff0;

  $edge2: #0001;
  $middle2: #0000;

  .backdrop1 {
    @include frontdrop;
    background: repeating-radial-gradient(circle at 150% 150%, $middle1, $edge1 5px, $middle1 10px);
  }

  .backdrop2 {
    @include frontdrop;
    background: repeating-linear-gradient($middle2, $edge2 5px, $middle2 10px);
    animation-duration: 450s;
    animation-direction: reverse;
  }

  .backdrops {
    @include vt-gradients(50%);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    mix-blend-mode: hard-light;
    z-index: 1;
    box-shadow:
      0 0 0.5em 0.5em #000 inset,
      // 0 0 1em 0em #000 inset
      ;
    @media (min-width: 992px) {
      box-shadow: 0 0 3em 0em #000 inset, 0 0 2em 0em #000 inset;
    }

  }
</style>
