<script lang="ts">
	import { createEventDispatcher } from "svelte";
  import Icon from "svelte-awesome";
  import spinner from "svelte-awesome/icons/spinner";
  import check from "svelte-awesome/icons/check";
  import {fade} from "svelte/transition";

  export let disabled = false;

  const waitingPeriod = 1000;
  const confirmingTimeout = 5000;
  const thanksPeriod = 2000;

  const dispatch = createEventDispatcher();
  let mode: "ready"|"waiting"|"confirming"|"thanks" = "ready";

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
      mode = "thanks";
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setTimeout(() => {
        mode = "ready";
      }, thanksPeriod);
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

  {#key mode}
  <div class="actual" transition:fade>
    {#if mode === "ready"}
      <slot/>
    {:else if mode === "confirming"}
      <slot name="confirming">Confirm</slot>
    {:else if mode === "waiting"}
      <Icon data={spinner} pulse/>
    {:else if mode === "thanks"}
      <Icon data={check}/>
    {/if}
  </div>
  {/key}
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

