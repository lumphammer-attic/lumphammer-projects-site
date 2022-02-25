<script>
  import LeftArrow from "./LeftArrow.svelte";
  import { base } from "$app/paths";
  import {browser } from "$app/env";

  const current = (browser ? window : global).location;
  const parent = current?.pathname.replace(new RegExp(`^${base||"/"}`), "").split("/").slice(0, -1).join("/");

  console.log({base, current, parent});

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
hr {
  border-style: double none none none;
  border-width: 5px;
}
header {
  line-height: 1;
}

nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.site-title {
  flex: 1;
  text-align: right;
  flex-basis: content;
  min-width: max-content;
}

.links {
  flex: 1;
  min-width: max-content;
}
</style>


<header>
  <nav>
    <div class="links">
      <a href="/">
        <LeftArrow/>
        [home]
      </a>
      {#if parent}
        <!-- <a href={`/${parent}`}> -->
        <a href=".">
          <LeftArrow/>
          [Up a level]    
        </a>
      {/if}
    </div>
    <div class="site-title">
      lumphammer projects
    </div>
  </nav>
  
  <hr />
</header>

<div class="wrapper">
  <slot/>
</div>

<hr/>

