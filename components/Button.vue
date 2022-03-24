<template>
  <nuxt-link v-if="to" :to="to" class="Button-link">
    <button
      :id="id"
      :value="value"
      :type="type"
      :name="name"
      :style="width ? `min-width: ${width}px;` : ''"
      :disabled="disabled"
      :class="computedClass"
      @click="$emit('click')"
    >
      {{ label }}
      <slot />
    </button>
  </nuxt-link>
  <a v-else-if="href" :href="href" target="_blank" class="Button-link">
    <button
      :id="id"
      :value="value"
      :type="type"
      :name="name"
      :style="width ? `min-width: ${width}px;` : ''"
      :disabled="disabled"
      :class="computedClass"
      @click="$emit('click')"
    >
      {{ label }}
      <slot />
    </button>
  </a>
  <button
    v-else
    :id="id"
    :value="value"
    :type="type"
    :name="name"
    :style="width ? `min-width: ${width}px;` : ''"
    :class="computedClass"
    @click="$emit('click')"
  >
    {{ label }}
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
    ml: {
      type: String,
      default: '',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass() {
      const classes = ['Button']
      if (this.fullWidth) classes.push('Button--fullWidth')
      if (this.secondary) classes.push('Button--secondary')
      if (this.disabled) classes.push('Button--disabled')
      if (this.outline) classes.push('Button--outline')
      if (this.primary) classes.push('Button--primary')
      if (this.reverse) classes.push('Button--reverse')
      if (this.shadow) classes.push('Button--shadow')
      if (this.white) classes.push('Button--white')
      if (this.small) classes.push('Button--small')
      if (this.ml) classes.push(`ml-${this.ml}`)
      return classes
    },
  },
}
</script>

<style scoped lang="scss">
.Button-link {
  display: inline-block;
}

.Button {
  height: 44px;
  line-height: 44px;
  padding: 0 25px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s, background-color 0.3s, border-color 0.3s,
    color 0.3s;

  &--shadow {
    box-shadow: 0px 4px 16px rgba(12, 39, 91, 0.4);
  }

  &--small {
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    padding: 0 15px;
  }

  &--primary {
    background: #2880ff;
    color: white;
    &:hover {
      background: #246dd7;
    }
  }

  &--fullWidth {
    width: 100%;
  }

  &--primary.Button--shadow {
    box-shadow: 0px 4px 16px rgba(114, 171, 254, 0.7);
  }

  &--primary.Button--disabled.Button--shadow {
    box-shadow: 0px 4px 16px rgba(150, 150, 150, 0.5);
  }

  &--primary.Button--disabled {
    background: #cbcbcb;
    color: #a0a0a0;
  }

  &--secondary {
    border: 1px solid #888;
    color: #000;
    &:hover {
      border: 1px solid #000;
    }
  }

  &--secondary.Button--disabled {
    opacity: 0.5;
    &:hover {
      border: 1px solid #888;
    }
  }

  &--disabled {
    cursor: not-allowed;
  }

  &--white {
    background: white;
    color: var(--color-blue);
    &:hover {
      background: #f2f2f2;
    }
  }

  &--reverse {
    background: #f9a746;
    color: white;
    &:hover {
      background: #de9238;
    }
  }

  &--reverse.Button--disabled {
    opacity: 0.8;
  }

  &--outline.Button--primary {
    background: transparent;
    border: 2px solid #2880ff;
    color: #2880ff;
    line-height: 42px;
    box-shadow: 0px 4px 16px rgba(114, 171, 254, 0.5);

    &:hover {
      background: #2880ff;
      color: white;
    }
  }
}

/* DARK MODE */

.Migaku-DarkMode .Button {
  color: #fff;

  &--primary {
    background: #f9a746;
    color: white;
    &:hover {
      background: #de9238;
    }
  }

  &--primary.Button--shadow {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  }

  &--secondary {
    border: 1px solid #999;
    color: #fff;
    &:hover {
      border: 1px solid #fff;
    }
  }

  &--primary.Button--disabled.Button--shadow {
    box-shadow: 0px 4px 16px rgba(25, 25, 25, 0.5);
  }

  &--primary.Button--disabled {
    background: #a0a0a0;
    color: #cbcbcb;
  }

  &--secondary.Button--disabled {
    opacity: 0.5;
    &:hover {
      border: 1px solid #888;
    }
  }

  &--white {
    background: var(--color-dark-grey);
    color: white;
    &:hover {
      background: var(--color-dark-grey-darken-2);
    }
  }

  &--reverse {
    background: #2880ff;
    color: white;
    &:hover {
      background: #246dd7;
    }
  }

  &--outline.Button--primary {
    background: transparent;
    border: 2px solid #f9a746;
    color: #f9a746;
    line-height: 42px;
    box-shadow: 0px 4px 16px rgba(25, 25, 25, 0.3);

    &:hover {
      background: #f9a746;
      color: white;
    }
  }
}
</style>
