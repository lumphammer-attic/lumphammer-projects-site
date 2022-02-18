<script lang="ts">
  const  defaultName = "world";
  const  defaultGreeting = "Hello";
  export let name = defaultName;
  export let greeting = defaultGreeting;
</script>

<p>
  {greeting ?? defaultGreeting}, {name ?? defaultName}!
</p>