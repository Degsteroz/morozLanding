<template>
  <div
    class='componentContainer'
    @click='changeModalStateView'
  >
    <div class='imageWrapper' >
      <img
        :src='imageSrc'
        :key='image'
        class='wrapper__image'
        alt='My work preview'
      />
      <BaseModal
        v-if='showModal'
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <img
          v-lazy="loaderConfig"
          class='wrapper__image__fullSize'
          alt='My work full size'
        />
      </BaseModal>
    </div>
  </div>
</template>

<script>
import {
  FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX,
  FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX,
  FORMATTED_IMAGE_PREFIX,
} from '@/pageData'

import BaseModal from './BaseModal.vue'

export default {
  name: 'BaseImageCard',
  props: {
    image: {
      required: true,
    }
  },
  components: {
    BaseModal
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    changeModalStateView(e) {
      e.stopPropagation()
      this.showModal = !this.showModal
    }
  },
  computed: {
    loaderConfig() {
      const { image } = this.$props
      return {
        src: FORMATTED_IMAGE_PREFIX + image,
        loading: FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX + image,
        error: this.imageSrc,
      }
    },
    imageSrc() {
      return FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + this.$props.image
    }
  }
}
</script>

<style lang='scss'>
.componentContainer {
  display: flex;
  flex: 1 1 150px ;
  flex-direction: column;
  overflow: hidden;
  transition: all 1s ease-in-out;
  &:hover {
   flex-basis: 400px;
    .wrapper__image {
      filter: none;
    }
  }
}
.imageWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 400px;
  position: relative;
}
.wrapper__image {
  height: 400px;
  filter: grayscale(1);
  transition: filter 1s ease-in-out, opacity 0.4s ease-in-out;
  cursor: pointer;
}
.wrapper__image__fullSize {
  height: calc(100vh - 50px);
}
img[lazy=loading] {
  filter: blur(8px);
}
img[lazy=loaded] {
  animation: appear 0.5s ease;
}

@keyframes appear {
  from {
    filter: blur(8px);
  }
  to {
    filter: blur(0);
  }
}

</style>
