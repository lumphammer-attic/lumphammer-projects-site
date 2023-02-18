<script context="module" lang="ts">
import RightArrow from "$lib/RightArrow.svelte";
</script>

<style lang="scss">
  section { 
    color: #333;
    // background-image: var(--gradient-13);
    background-image: url(/investigator-cover-notext.webp);
    background-size: cover;
    background-position-y: 70%;
    color: white;
    --glow-color: #fff;
    --color: #000;
    --h-image: none;
  }
</style>

<section class="interactive">
  <a 
    href="https://gitlab.com/n3dst4/investigator-fvtt/-/blob/master/README.md"
    class="linkifier"
    target="_new"
  >
    INVESTIGATOR
  </a>
  <h2 data-text="INVESTIGATOR System">INVESTIGATOR System</h2>
  <p>
    GUMSHOE-compatible system for Foundry VTT.
    <RightArrow />
  </p>
    
</section>
