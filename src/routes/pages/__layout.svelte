<script>
  import Icon from 'svelte-awesome';
  import arrowleft from 'svelte-awesome/icons/arrow-left';
  import "../../stylesheets/pages";

  const foo = 5;

</script>


<header>
  <a href="/">
    <Icon data={arrowleft} />
    [lumphammer projects home]
  </a>
  <hr />
</header>

<slot/>


<style>
</style>