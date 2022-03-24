<template>
  <img :loading="!preload" :src="src" :alt="alt" :class="getClasses" />
</template>

<script>
export default {
  name: 'MigakuImage',
  props: {
    extraSmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    alt: {
      type: String,
      required: true,
    },
    originalSize: {
      type: Boolean,
      default: false,
    },
    preload: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    getClasses() {
      const classes = ['MigakuImage']
      if (this.extraSmall) classes.push('MigakuImage--extra-small')
      if (this.small) classes.push('MigakuImage--small')
      if (this.large) classes.push('MigakuImage--large')
      if (this.originalSize) classes.push('MigakuImage--originalSize')
      return classes
    },
  },
}
</script>

<style lang="scss" scoped>
.MigakuImage {
  width: 70%;
  height: auto;
  margin: 15px auto;
  display: block;
  text-align: center;

  &--extra-small {
    width: 30%;
  }

  &--small {
    width: 50%;
  }

  &--large {
    width: 100%;
  }

  &--originalSize {
    width: auto;
    max-width: 100%;
  }
}
</style>
