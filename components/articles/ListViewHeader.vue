<template>
  <div class="ListViewHeader-container full-width mb-10">
    <div
      v-if="$store.state.ui.darkMode"
      class="ListViewHeader-wave"
      style="background-image: url(/articles/wave_dark.svg)"
    />
    <div
      v-else
      class="ListViewHeader-wave"
      style="background-image: url(/articles/wave.svg)"
    />
    <template v-if="variante">
      <div
        class="ListViewHeader-illustration ListViewHeader-illustration-variante"
        style="background-image: url(/articles/header-2.png)"
      />
    </template>
    <template v-else>
      <div
        v-if="$store.state.ui.darkMode"
        class="ListViewHeader-illustration ListViewHeader-illustration--dark"
        style="background-image: url(/articles/header-1_dark.png)"
      />
      <div
        v-else
        class="ListViewHeader-illustration"
        style="background-image: url(/articles/header-1.png)"
      />
    </template>
    <div class="ListViewHeader-content">
      <Title v-scroll-reveal="{ delay: 450 }" heading="1" :label="title" />
      <p v-scroll-reveal="{ delay: 600 }">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListViewHeader',
  props: {
    description: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    variante: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.ListViewHeader-container {
  position: relative;
  height: 556px;
  background: var(--color-lightblue);
  overflow: hidden;

  @media (max-width: 1200px) {
    height: auto;
  }
}

.ListViewHeader-wave {
  height: 556px;
  width: 1095px;
  position: absolute;
  right: 0;
  background-size: cover;
  background-position: center center;

  @media (max-width: 1200px) {
    display: none;
  }
}

.ListViewHeader-illustration {
  height: 483px;
  width: 549px;
  position: absolute;
  right: 170px;
  bottom: 0;
  background-size: cover;
  background-position: center center;

  @media (max-width: 1200px) {
    display: none;
  }

  &--dark {
    bottom: -15px;
  }
}

.ListViewHeader-illustration-variante {
  height: 369px;
  width: 355px;
  right: 350px;
}

.ListViewHeader-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 50vw;
  text-align: center;

  @media (max-width: 1200px) {
    padding: 50px 0;
    width: 100vw;
    position: relative;
    transform: none;
  }

  h1,
  p {
    max-width: 350px;
    margin: 20px auto;
    text-align: left;

    @media (max-width: 1200px) {
      max-width: 80%;
    }
  }
}

/* DARK MODE */

.Migaku-DarkMode .ListViewHeader-container {
  background: var(--color-dark-grey-darken-2);
}
</style>
