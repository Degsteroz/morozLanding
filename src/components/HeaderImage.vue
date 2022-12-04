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
import { HEADER_IMAGE, HEADER_IMAGE2 } from '@/pageData'
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
        HEADER_IMAGE,
        HEADER_IMAGE2,
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
  animation: filter 6s ease;
}

@keyframes filter {
  0% {
    filter: blur(5px);
  }
  100% {
    filter: blur(0);
  }

}
.headerImage {
  width: 100vw;
}
@media screen and (max-width: 480px) {
  .headerImageContainer {
    display: flex;
    width: 100vw;
    justify-content: center;
  }
  .headerImage {
    height: 100%;
    width: auto;
    filter: brightness(0.5);
  }
}
</style>
