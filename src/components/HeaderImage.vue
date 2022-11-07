<template>
  <div class="headerImageContainer">
    <img
      loading="lazy"
      :src="imageArray[imageIndex]"
      class="headerImage"
      alt="header picture"
    />
  </div>
</template>
<script>
import headerPicture from '@img/headerPictures.jpeg'
export default {
  name: 'HeaderImage',
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      this.windowTop = window.top.scrollY
    }
  },
  data() {
    return {
      windowTop: 0,
      imageArray: [
        headerPicture,
        'https://sun6-23.userapi.com/impg/lbdZQ8Ps76JMA-jTcc1q5Al5tPzI7Idmb6XvvQ/b5h6sjXUY7U.jpg?size=2560x1707&quality=96&sign=f87629e7dba381938fe5d1bf6fa296f6&type=album'
      ]
    }
  },
  computed: {
    imageIndex() {
      return this.windowTop < 700 ? 0 : 1
    }
  }
}
</script>
<style>
.headerImageContainer {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  z-index: -1;
}
.headerImage {
  width: 100vw;
}
</style>
