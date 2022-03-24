<template>
  <div
    class="ArticleTeaser-container"
    :class="{ 'ArticleTeaser-container--reverse': reverse }"
  >
    <div
      v-if="$store.state.ui.darkMode"
      class="ArticleTeaser-image ArticleTeaser-image--mobile"
      :style="`background-image: url(${content.illustration.replace(
        '.png',
        '_dark.png'
      )})`"
    >
      <div class="ArticleTeaser-image-hoverContent">
        <span>View our guides<span /></span>
      </div>
    </div>
    <div
      v-else
      class="ArticleTeaser-image ArticleTeaser-image--mobile"
      :style="`background-image: url(${content.illustration})`"
    >
      <div class="ArticleTeaser-image-hoverContent">
        <span>View our guides<span /></span>
      </div>
    </div>
    <template v-if="reverse">
      <div
        v-if="$store.state.ui.darkMode"
        class="ArticleTeaser-image"
        :style="`background-image: url(${content.illustration.replace(
          '.png',
          '_dark.png'
        )})`"
      >
        <div class="ArticleTeaser-image-hoverContent">
          <span>View our guides<span /></span>
        </div>
      </div>
      <div
        v-else
        class="ArticleTeaser-image"
        :style="`background-image: url(${content.illustration})`"
      >
        <div class="ArticleTeaser-image-hoverContent">
          <span>View our guides<span /></span>
        </div>
      </div>
    </template>
    <div
      class="ArticleTeaser-infos"
      :class="{ 'ArticleTeaser-infos--reverse': reverse }"
    >
      <p v-if="index >= 0" v-scroll-reveal class="ArticleTeaser-index mt-10">
        {{ formattedIndex }}
      </p>
      <Title
        v-scroll-reveal="{ delay: 100 }"
        heading="2"
        :label="content.title"
        mt="2"
      />
      <p
        v-scroll-reveal="{ delay: 200 }"
        class="ArticleTeaser-description mt-10 mb-10"
      >
        {{ content.description }}
      </p>
      <Button v-if="button" primary shadow :label="button" :to="content.path" />
      <ul v-else>
        <List
          v-for="(item, i) in orderedItems"
          :key="i"
          v-scroll-reveal="{ delay: 300 + i * 150 }"
          type="bullet"
          :label="item.shortTitle ? item.shortTitle : item.title"
          :to="item.path"
        />
      </ul>
    </div>
    <template v-if="!reverse">
      <div
        v-if="$store.state.ui.darkMode"
        class="ArticleTeaser-image"
        :style="`background-image: url(${content.illustration.replace(
          '.png',
          '_dark.png'
        )})`"
      >
        <div class="ArticleTeaser-image-hoverContent">
          <span>View our guides<span /></span>
        </div>
      </div>
      <div
        v-else
        class="ArticleTeaser-image"
        :style="`background-image: url(${content.illustration})`"
      >
        <div class="ArticleTeaser-image-hoverContent">
          <span>View our guides<span /></span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Button from '../Button.vue'
import List from '../List.vue'
export default {
  name: 'ArticleTeaser',
  props: {
    button: {
      type: String,
      default: '',
    },
    content: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: -1,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedIndex() {
      return this.index < 10 ? `0${this.index}` : this.index
    },
    orderedItems() {
      return [...this.content.items].sort((a, b) => a.position > b.position)
    },
  },
  components: { Button, List },
}
</script>

<style lang="scss" scoped>
.ArticleTeaser-container {
  max-width: 1044px;
  margin: 100px auto;
  padding: 0 20px;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    display: block;
  }
}

.ArticleTeaser-infos {
  display: inline-block;
  width: 500px;
  vertical-align: top;
  text-align-last: left;
  padding: 10px;

  * {
    text-align: left;
  }

  &--reverse {
    padding-left: 120px;
  }

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 750px) {
    width: 70vw;
    padding-left: 0;
  }
}

.ArticleTeaser-image {
  position: relative;
  display: inline-block;
  height: 500px;
  width: 500px;
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  overflow: hidden;

  &--mobile {
    display: none;
  }

  .ArticleTeaser-image-hoverContent {
    user-select: none;
    transition: opacity 0.3s;
    backdrop-filter: blur(5px);
    opacity: 0;
    background: rgba(43, 48, 59, 0.9);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    & > span {
      position: absolute;
      left: 50%;
      bottom: 100px;
      font-size: 24px;
      font-weight: 400;
      color: white;
      transform: translateX(-50%);

      @media (max-width: 1200px) {
        font-size: 16px;
        bottom: 45%;
      }

      @media (max-width: 750px) {
        font-size: 18px;
      }

      &::before,
      &::after {
        content: '';
        width: 15px;
        height: 2px;
        border-radius: 2px;
        position: absolute;
        left: -40px;
        top: 50%;
        background: white;
        transform-origin: 0 1px;
        transform: rotate(45deg);
        animation: arrow 2s infinite ease-in-out;

        .ArticleTeaser-container--reverse & {
          transform-origin: 100% 1px;
          animation: arrow-reverse 2s infinite ease-in-out;

          left: auto;
          right: -40px;
        }

        @media (max-width: 750px) {
          transform-origin: 100% 1px;
          transform: rotate(135deg);
          left: calc(50% - 10px) !important;
          top: auto !important;
          bottom: -45px !important;
        }
      }

      &::before {
        transform: rotate(-45deg);

        @media (max-width: 750px) {
          transform: rotate(45deg);
        }
      }

      > span {
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 3px;
        width: 50%;
        background: var(--color-blue);

        .ArticleTeaser-container--reverse & {
          left: auto;
          right: 0;
        }

        @media (max-width: 750px) {
          left: auto;
          right: 50% !important;
          transform: translateX(50%);
        }
      }
    }
  }

  &:hover .ArticleTeaser-image-hoverContent {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    height: 350px;
    width: 350px;
  }

  @media (max-width: 750px) {
    width: 70vw;
    height: 70vw;
    display: none;

    &--mobile {
      display: inline-block;
    }
  }
}

.ArticleTeaser-index {
  font-size: 30px;
  font-weight: 900;
  opacity: 0.2;
  color: var(--color-blue);
  margin-right: 15px;
  transition: color 0.3s, opacity 0.3s;
}

.ArticleTeaser-description {
  max-width: 360px;
}

/* DARK MODE */

.Migaku-DarkMode .ArticleTeaser-index {
  color: var(--color-orange);
}

/* ANIMATION */

@keyframes arrow {
  0% {
    left: -40px;
  }
  50% {
    left: -55px;
  }
  100% {
    left: -40px;
  }
}

@keyframes arrow-reverse {
  0% {
    right: -40px;
  }
  50% {
    right: -55px;
  }
  100% {
    right: -40px;
  }
}
</style>
