<script>
  import PageLayout from "$lib/PageLayout.svelte";
</script>
  
<PageLayout>
  <slot/>
  <span slot="header">
    {$$props.shortTitle ?? ""}
  </span>
</PageLayout>

<style lang="scss">
  
</style>