<template>
  <component :is="getTag" :class="getClasses">{{ label }}</component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    customClasses: {
      type: String,
      default: '',
    },
    heading: {
      type: String,
      default: '1',
    },
    label: {
      type: String,
      required: true,
    },
    mb: {
      type: String,
      default: '0',
    },
    mt: {
      type: String,
      default: '0',
    },
    pb: {
      type: String,
      default: '0',
    },
    pt: {
      type: String,
      default: '0',
    },
  },
  computed: {
    getClasses() {
      const classes = [
        ...this.customClasses.split(' '),
        `Title-${this.heading}`,
        `mb-${this.mb}`,
        `mt-${this.mt}`,
        `pb-${this.pb}`,
        `pt-${this.pt}`,
      ]

      if (this.center) classes.push('text-center')

      return classes
    },
    getTag() {
      return `h${this.heading}`
    },
  },
}
</script>

<style lang="scss" scoped>
[class*='Title-'] {
  padding-bottom: 10px;
}

.Title-1 {
  font-size: 35px;
  font-weight: 500;
}

.Title-2 {
  font-size: 30px;
  font-weight: 400;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 1px;
    background: #c4c4c4;
  }
}

.text-center.Title-2::after {
  left: 50%;
  transform: translateX(-50%);
}

.Title-3 {
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .Title-1 {
    font-size: 30px;
  }

  .Title-2 {
    font-size: 27px;
  }

  .Title-3 {
    font-size: 16px;
  }
}
</style>
