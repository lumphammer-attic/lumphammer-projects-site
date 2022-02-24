
<script lang="ts">
	import { createEventDispatcher } from "svelte";

  export let disabled = false;

  const waitingPeriod = 1000;
  const confirmingTimeout = 5000;

  const dispatch = createEventDispatcher();
  let mode: "ready"|"waiting"|"confirming" = "ready";

  let timeoutId: ReturnType<typeof setTimeout>|undefined;

  function onClick(event: MouseEvent) {
    if (mode === "ready") {
      mode = "waiting";
      setTimeout(() => {
        mode = "confirming";
        timeoutId = setTimeout(() => {mode = "ready";}, confirmingTimeout);
      }, waitingPeriod);
    } else if (mode === "confirming") {
      dispatch("click", event.detail);
      mode = "ready";
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }
</script>

<button on:click={e => onClick(e)} disabled={disabled}>
  {#if mode === "ready"}
    <slot/>
  {:else if mode === "confirming"}
    <slot name="confirming">
      Confirm
    </slot>
  {:else}
    <span>...</span>
  {/if}
</button>


