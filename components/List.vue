<template>
  <li v-if="type === 'iconList'" class="List-iconList">
    <div
      class="List-iconList-iconContainer"
      :style="{ background: `var(--color-${color})` }"
    >
      <Icon :name="icon" />
    </div>
    <h3 class="List-iconList-title">{{ label }}</h3>
    <p class="List-iconList-content">{{ content }}</p>
  </li>
  <li v-else :class="getClasses">
    <Icon v-if="type === 'check'" name="checkmark" />
    <span v-if="type === 'numbered'" class="List-number">{{ number }}</span>
    <span v-if="type === 'bullet'" class="List-bullet" />
    <span v-if="!to" :class="{ light }">{{ label }}</span>
    <Link v-else :to="to" no-style>
      <span class="List-link">{{ label }}</span>
    </Link>
  </li>
</template>

<script>
import Link from './Link.vue'
import Icon from './Icon.vue'
export default {
  name: 'List',
  props: {
    light: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
    customClasses: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
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
    number: {
      type: String,
      default: '1',
    },
    pb: {
      type: String,
      default: '0',
    },
    pt: {
      type: String,
      default: '0',
    },
    to: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'check',
    },
  },
  computed: {
    getClasses() {
      const classes = [
        'List-Element',
        ...this.customClasses.split(' '),
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
  components: { Link, Icon },
}
</script>

<style lang="scss" scoped>
.List-Element {
  font-size: 12px;
  font-weight: 700;
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  & svg {
    margin-right: 15px;
  }
}

.light {
  font-weight: normal;
}

.List-number {
  font-size: 16px;
  font-weight: 900;
  opacity: 0.2;
  color: var(--color-blue);
  margin-right: 15px;
  transition: color 0.3s, opacity 0.3s;
}

.List-bullet {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: var(--color-blue);
  margin-right: 15px;
  transition: background 0.3s;
}

.List-iconList {
  list-style: none;
  text-align: center;
  width: 230px;

  .List-iconList-iconContainer {
    margin: auto;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;

    svg {
      height: 24px;
      width: 24px;
    }
  }

  .List-iconList-title {
    margin-top: 25px;
    font-size: 16px;
    font-weight: 500;
  }

  .List-iconList-content {
    margin-top: 25px;
    font-size: 13px;
    font-weight: 400;
  }
}

.List-link {
  position: relative;
  padding-bottom: 3px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s;
    background: var(--color-dark-grey);
  }

  &:hover::after {
    width: 100%;
  }
}

/* DARK MODE */

.Migaku-DarkMode {
  .List-number {
    color: var(--color-orange);
    opacity: 0.3;
  }

  .List-bullet {
    background: var(--color-orange);
  }

  .List-link {
    &::after {
      background: white;
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
