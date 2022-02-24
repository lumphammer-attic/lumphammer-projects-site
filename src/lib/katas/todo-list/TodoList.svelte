<script lang="ts">
  import {nanoid} from "nanoid";
  import { toDoItems } from "./stores";
  import { DisplayMode } from "./types";
  import { fade } from "svelte/transition";
  import Confirmer from "$lib/Confirmer.svelte";


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

  function onDelete (id: string) {
    const items = $toDoItems;
    delete items[id];
    $toDoItems = items;
  }

  function onPurge () {
    const items = $toDoItems;
    for (const id in filtered) {
      delete items[id];
    }
    $toDoItems = items;
  }
</script>


<select bind:value={mode}>
  <option value={DisplayMode.completed}>Completed items</option>
  <option value={DisplayMode.notCompleted}>Current items</option>
  <option value={DisplayMode.both}>All items</option>
</select>

<hr />
{#if filtered.length === 0}
  {#if mode === DisplayMode.completed}
    <p>~~~ No completed items ~~~</p>
  {:else if mode === DisplayMode.notCompleted}
    <p>~~~ You're up to date! ~~~</p>
  {:else}
    <p>~~~ No items ~~~</p>
  {/if}
{/if}
{#key mode}
<ul>
  {#each filtered as id (id)}
    <li transition:fade|local>
      <label>
        <input 
          type="checkbox"
          bind:checked={$toDoItems[id].completed}
        />
        {#if $toDoItems[id].completed}
          <Confirmer
            on:click={() => onDelete(id)}
          >
            Delete
            <!-- <span slot="confirming">Fo' sho'?</span> -->
          </Confirmer>
        {/if}
        {$toDoItems[id].label}
      </label>
    </li>
  {/each}
</ul>
{/key}
{#if mode !== DisplayMode.completed}
<hr/>
<p>
  <input
    bind:value={inputText}
    placeholder="Enter text..."
  />
  <button
    on:click={onCreate}
    disabled={/^\s*$/.test(inputText)}
  >
    Create
</button>
</p>
{/if}
{#if mode === DisplayMode.completed}
<hr/>
<p>
  <Confirmer
    on:click={onPurge}
    disabled={filtered.length === 0}
  >
    Purge all completed items
  </Confirmer>
</p>
{/if}