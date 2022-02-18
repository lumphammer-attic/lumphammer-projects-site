<script>
  import Icon from "svelte-awesome";
  import arrowleft from "svelte-awesome/icons/arrow-left";
</script>

<style lang="scss">
.wrapper {
  :global(h1), :global(h2), :global(h3), :global(h4) {
    margin: 2.0em 0 1em 0;
  }
  :global(p) {
    margin: 1.0em 0 0 0;
  }
}
</style>


<header>
  <a href="/">
    <Icon data={arrowleft} />
    [lumphammer projects home]
  </a>
  <slot name="header"/>
  <hr />
</header>

<div class="wrapper">
  <slot/>
</div>

