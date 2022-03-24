<template>
  <nuxt-link
    v-if="to"
    :class="noStyle ? '' : 'Link'"
    :style="`font-size: ${fontSize}px`"
    :to="to"
  >
    <slot />
  </nuxt-link>
  <a
    v-else-if="href"
    target="_blank"
    :class="noStyle ? '' : 'Link'"
    :style="`font-size: ${fontSize}px`"
    :href="href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    noStyle: {
      type: Boolean,
      default: false,
    },
    fontSize: {
      type: String,
      default: '16',
    },
  },
}
</script>

<style lang="scss">
.Link {
  font-size: 16px;
  color: var(--color-blue) !important;
  position: relative;
  transition: color 0.3s;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s;
    background: var(--color-blue);
  }

  &:hover::after {
    width: 100%;
  }
}

/* DARK MODE */

.Migaku-DarkMode .Link {
  color: var(--color-orange) !important;

  &::after {
    background: var(--color-orange);
  }
}
</style>
