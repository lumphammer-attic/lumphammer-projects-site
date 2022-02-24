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
  <div class="widther"><slot/></div>
  <div class="widther"><slot name="confirming">Confirm</slot></div>
  <div class="widther">...</div>

  <div class="heighter"><slot/></div>
  <div class="heighter"><slot name="confirming">Confirm</slot></div>
  <div class="heighter">...</div>

  <div class="actual">
    {#if mode === "ready"}
      <slot/>
    {:else if mode === "confirming"}
      <slot name="confirming">Confirm</slot>
    {:else}
      ...
    {/if}
  </div>
</button>


<style lang="scss">
  .widther {
    overflow: hidden;
    height: 0px;
    width: max-content;
    background-color: aliceblue;
  }
  .heighter {
    display: inline-block;
    overflow: hidden;
    height: auto;
    width: 0px;
    background-color: rebeccapurple;
    white-space: nowrap;
    line-height: 1;
  }
  .actual {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    height: auto;
  }
</style>

