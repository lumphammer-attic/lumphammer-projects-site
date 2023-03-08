<script>
  import './styles.css';
  import './styles/base.scss';
  import './styles/themes.scss';
  import './styles/screen-effects.scss';
</script>

<div class="app retroterminal">
  <div class="frontdrops">
    <div class="frontdrop1" />
    <div class="frontdrop2" />
    <div class="fade" />
  </div>
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
</style>
