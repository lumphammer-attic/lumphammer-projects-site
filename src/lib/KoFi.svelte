<script lang="ts">
import { browser } from "$app/env";
import { onMount } from 'svelte';
import { koFoWidgetAsHTML1, koFoWidgetAsHTML2, koFoWidgetJS } from "./koFiWidgetAsHtml";

let aTag: HTMLAnchorElement;
let kofiWidget: HTMLDivElement;

function bootKofi () {
  if (!window.hasOwnProperty("kofiwidget2")) {
    console.log("Waiting...");
    setTimeout(bootKofi, 200);
    return
  }
  console.log("Booting Ko-Fi...");
  kofiwidget2.init('Support Me on Ko-fi', '#1b7d00', 'F1F13NAXL');
  const html = kofiwidget2.getHTML();
  kofiWidget.innerHTML = html;
}

onMount(bootKofi);
</script>

{#if browser}
<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script>
{/if}



<style lang="scss">
  section {
    color: rgb(255, 255, 255);
    background-image: var(--gradient-3);
    cursor: pointer;
    --shadow-color: black;
    box-shadow: 0em 0em 0.5em 0.1em var(--shadow-color);
    transition: transform 50ms ease-in-out;
    &:hover {
      --shadow-color: var(--color);
      // box-shadow: 0em 0em 0.5em 0.1em var(--color);
      transform: scale(1.01);
    }
  }

  .ko-fi-badge {
    // transform: scale(2);
    // transform-origin: left;
    box-shadow: 0 0 0.5em var(--color);
    border-radius: 1em;
    width: max-content;

  }

  section > a {
    display: block;
  }
</style>


<section on:click={() => aTag.click()}>
  <h2 data-text="Tip jar">Tip jar</h2>
  <p>
    If you like my work, you can chip in towards running costs* at Ko-Fi:
  </p>
  
  <div bind:this={kofiWidget} ></div>

  <footnote>*: RPG books, miniatures & whisky</footnote>  
</section>
