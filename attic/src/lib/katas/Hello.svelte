<script lang="ts">
  const  defaultName = "world";
  const  defaultGreeting = "Hello";
  export let name = defaultName;
  export let greeting = defaultGreeting;
</script>

<div>
  {greeting ?? defaultGreeting}, {name ?? defaultName}!
</div>