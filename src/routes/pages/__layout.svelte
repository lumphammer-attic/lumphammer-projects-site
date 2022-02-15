<script>
  import Icon from 'svelte-awesome';
  import arrowleft from 'svelte-awesome/icons/arrow-left';
</script>

<header>
  <a href="/">
    <Icon data={arrowleft} />
    [lumphammer projects home]
  </a>
  <hr />
</header>

<slot/>