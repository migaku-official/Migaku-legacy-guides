<template>
  <div class="MigakuTableOfContent">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MigakuTableOfContent',
}
</script>

<style lang="scss">
.MigakuTableOfContent {
  li {
    color: red;
  }
}
</style>
