<template>
  <div>
    <header class="layoutHeader">
      Warning: This documentation is for deprecated addons which are no longer
      maintained by Migaku. See
      <a href="https://migaku.io">our new website here</a>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>

<style lang="scss">
@import '@/assets/main.scss';
body {
  padding-top: 50px;
}

.layoutHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 16px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-shadow: 0px 2px 10px rgba(40, 128, 255, 0.25);

  a {
    color: #2880ff;
    font-weight: 500;
    margin-left: 4px;
  }
}
</style>
