<script>
  import Icon from "svelte-awesome";
  import code from "svelte-awesome/icons/code";
import RightArrow from "$lib/RightArrow.svelte";
</script>

<section class="interactive">
  <Icon class="backdrop-icon" data={code} scale={3} />
  <h2>About this site</h2>
  <a class="linkifier" href="/pages/md/about">/about</a>
  <p>
    Techy details
    <RightArrow />
  </p>
</section>