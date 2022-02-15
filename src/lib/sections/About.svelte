<script>
  import Icon from 'svelte-awesome';
  import code from 'svelte-awesome/icons/code';
  import arrow from 'svelte-awesome/icons/arrow-right';
</script>

<section class="interactive">
  <Icon class="backdrop-icon" data={code} scale={3} />
  <h2>About this site</h2>
  <a class="linkifier" href="/pages/about">/about</a>
  <p>
    Techy details
    <Icon data={arrow} />
  </p>
</section>