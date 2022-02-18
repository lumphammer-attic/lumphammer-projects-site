<script lang="ts">
  import Hello from "$lib/katas/Hello.svelte";
import PageLayout from "$lib/PageLayout.svelte";
  let greeting = "Screw you";
  let useGreeting = false;
  let name = "buddy";
  let useName = true;
</script>

<PageLayout>
  <h1>"Hello world" Kata</h1>
  <div class="outer">
    <label for="greeting">Greeting</label>
    <input class="control" name="greeting" bind:value={greeting} disabled={!useGreeting}/>
    <input class="checkbox" type="checkbox" bind:checked={useGreeting} />

    <label for="name">Name</label>
    <input class="control" name="name" bind:value={name} disabled={!useName} />
    <input class="checkbox" type="checkbox" bind:checked={useName}/>
  </div>

  <div class="result">
    <Hello
      greeting={useGreeting ? greeting : undefined}
      name={useName ? name : undefined}
    />
  </div>
</PageLayout>

<style lang="scss">
  .outer {
    display: grid;
    grid-template-columns: [label] 5em [control] 10em [checkbox] 5em;
    label {
      grid-column: label;
    }
    .control {
      grid-column: control;
    }
    .checkbox {
      grid-column: checkbox;
    }
  }
  .result {
    margin-top: 1em;
    border: 2px solid currentColor;
    padding: 1em;
  }
</style>
