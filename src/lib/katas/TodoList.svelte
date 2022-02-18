<script lang="ts">
  import {nanoid} from "nanoid";

  interface Item {
    // id: string;
    label: string;
    completed: boolean;
  }

  enum DisplayMode {
    completed,
    notCompleted,
    both
  }

  let items: { [id: string]: Item } = {
    one: {
      label: "Make a to-do list in Svelte",
      completed: false
    },
    two: {
      label: "Drink tea",
      completed: false
    },
    three: {
      label: "Start a Svelte project",
      completed: true
    }
  };

  let mode = DisplayMode.notCompleted;

  let inputText = "";

  $: filtered = Object.keys(items).filter((id) => {
    const item = items[id];
    return (
      mode === DisplayMode.both ||
      (mode === DisplayMode.completed && item.completed) ||
      (mode === DisplayMode.notCompleted && !item.completed)
    );
  });

  function onCreate () {
    items[nanoid()] = {
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


<ul>
  {#each filtered as id}
    <li>
      <label>
        <input 
          type="checkbox"
          bind:checked={items[id].completed}
        />
        {items[id].label}
      </label>
    </li>
  {/each}
</ul>

<p>
  <input bind:value={inputText} />
  <button
    on:click={onCreate}
  >
    Create
</button>
</p>
