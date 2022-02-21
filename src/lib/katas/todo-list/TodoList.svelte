<script lang="ts">
  import {nanoid} from "nanoid";
  import { toDoItems } from "./stores";
  import { DisplayMode } from "./types";
  import { fade } from "svelte/transition";


  let mode = DisplayMode.notCompleted;

  let inputText = "";

  $: filtered = Object.keys($toDoItems).filter((id) => {
    const item = $toDoItems[id];
    return (
      mode === DisplayMode.both ||
      (mode === DisplayMode.completed && item.completed) ||
      (mode === DisplayMode.notCompleted && !item.completed)
    );
  });

  function onCreate () {
    $toDoItems[nanoid()] = {
      completed: false,
      label: inputText,
    };
    inputText = "";
  }
</script>


<select bind:value={mode}>
  <option value={DisplayMode.completed}>Completed</option>
  <option value={DisplayMode.notCompleted}>Not completed</option>
  <option value={DisplayMode.both}>Both</option>
</select>


{#key mode}
<ul>
  {#each filtered as id (id)}
    <li transition:fade|local>
      <label>
        <input 
          type="checkbox"
          bind:checked={$toDoItems[id].completed}
        />
        {$toDoItems[id].label}
      </label>
    </li>
  {/each}
</ul>
{/key}

<p>
  <input bind:value={inputText} />
  <button
    on:click={onCreate}
    disabled={/^\s*$/.test(inputText)}
  >
    Create
</button>
</p>
