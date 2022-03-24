<template>
  <div class="MigakuVideo">
    <video
      width="100%"
      preload="none"
      :muted="autoplay ? !unmute : false"
      :autoplay="autoplay"
      :loop="loop"
      :controls="controls"
      :poster="error ? errorPoster : poster"
      @error="onError"
    >
      <source :src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'MigakuVideo',
  props: {
    autoplay: {
      type: Boolean,
      default: false,
    },
    controls: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    unmute: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      error: false,
      errorPoster:
        'https://via.placeholder.com/1280x720?text=Oops!+Video+Not+Found',
    }
  },
  computed: {
    poster() {
      return this.src.replace('.mp4', '.jpg')
    },
  },
  methods: {
    onError(e) {
      console.log(e)
      this.error = true
    },
  },
}
</script>

<style lang="scss" scoped>
.MigakuVideo {
  margin: 15px auto;
}
</style>
