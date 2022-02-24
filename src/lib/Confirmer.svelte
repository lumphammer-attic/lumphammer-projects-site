<script lang="ts">
	import { createEventDispatcher } from "svelte";

  export let disabled = false;

  const dispatch = createEventDispatcher();
  let confirming = false;

  function onClick(event: MouseEvent) {
    if (confirming) {
      dispatch("click", event.detail);
    } else {
      confirming = true;
      setTimeout(() => {confirming=false;}, 2000);
    }
  }
</script>

<button on:click={e => onClick(e)} disabled={disabled}>
  {#if confirming}
    <slot name="confirming">
      Confirm
    </slot>
  {:else}
    <slot/>
  {/if}
</button>


