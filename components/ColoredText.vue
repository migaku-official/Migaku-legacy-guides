<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'ColoredText',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    classes() {
      const classes = ['ColoredText']
      if (this.color === 'primary') {
        classes.push('ColoredText--primary')
      }
      if (this.color === 'light') {
        classes.push('ColoredText--light')
      }
      if (this.color === 'red') {
        classes.push('ColoredText--red')
      }
      return classes
    },
  },
}
</script>

<style lang="scss" scoped>
.ColoredText--primary {
  color: var(--color-blue) !important;
}

.ColoredText--light {
  color: var(--text-light) !important;
}

.ColoredText--red {
  color: var(--color-red) !important;
}

// Dark mode
.Migaku-DarkMode {
  .ColoredText--primary {
    color: var(--color-orange) !important;
  }
}
</style>
