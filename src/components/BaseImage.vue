<template>
  <img
    v-lazy="loaderConfig"
    alt='My work full size'
    src=''
  />
</template>
<script>
import {
  FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX,
  FORMATTED_SCALED1000_IMAGE_PREFIX,
} from '@/pageData'

export default {
  props: {
    image: {
      type: String,
      required: true,
    }
  },
  computed: {
    loaderConfig() {
      const { image } = this.$props
      return {
        src: FORMATTED_SCALED1000_IMAGE_PREFIX + image,
        loading: FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX + image,
      }
    },
  }
}
</script>

<style>
img[lazy=loading] {
  filter: blur(8px);
  height: 100%;
}
img[lazy=loaded] {
  animation: appear 0.5s ease;
  height: 100%;
}

@keyframes appear {
  from {
    filter: blur(8px);
  }
  to {
    filter: blur(0);
  }
}
@media screen and (max-width: 480px) {
  img[lazy=loaded] {
    width: 100%;
    height: auto;
    max-height: none;
  }
}
</style>
