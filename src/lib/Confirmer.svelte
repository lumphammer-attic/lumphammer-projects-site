<script lang="ts">
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onClick(event: MouseEvent) {
    dispatch("click", event.detail);
  }
</script>

<button on:click={e => onClick(e)}><slot/></button>


