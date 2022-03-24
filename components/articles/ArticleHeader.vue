<template>
  <header class="ArticleHeader-container">
    <Title v-scroll-reveal="{ delay: 150 }" heading="1" center :label="title" />
    <p v-scroll-reveal="{ delay: 300 }" class="ArticleHeader-description">
      {{ description }}
    </p>
    <div
      class="ArticleHeader-image"
      :style="`background-image: url(${image});`"
    />
  </header>
</template>

<script>
import Title from '../Title.vue'
export default {
  name: 'ArticleHeader',
  props: {
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: { Title },
}
</script>

<style lang="scss" scoped>
.ArticleHeader-container {
  height: 570px;
  background: var(--color-lightblue);
  position: relative;
  width: 100vw;
  transform: translateX(calc(((100vw - 1500px) / 2) * -1));
  margin-bottom: 330px;
  padding-top: 80px;

  @media (max-width: 1500px) {
    transform: none;
    margin-bottom: 220px;
  }

  @media (max-width: 1000px) {
    height: auto;
    padding-bottom: calc(24.22vw + 50px);
  }
}

.ArticleHeader-image {
  background-color: #fff;
  height: 546px;
  width: 972px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: -272px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1500px) {
    width: calc(972px / 1.5);
    height: calc(546px / 1.5);
    bottom: calc(-272px / 1.5);
  }

  @media (max-width: 1000px) {
    width: 85vw;
    height: 47.74vw;
    bottom: -23.79vw;
  }
}

.ArticleHeader-description {
  max-width: 632px;
  text-align: center;
  margin: 50px auto;
  font-size: 16px;

  @media (max-width: 1200px) {
    max-width: 85vw;
  }
}

/* DARK MODE */

.Migaku-DarkMode .ArticleHeader-container {
  background: var(--color-dark-grey-darken-2);
}

.Migaku-DarkMode .ArticleHeader-image {
  background-color: var(--color-dark-grey);
}
</style>
