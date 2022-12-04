<template>
  <div
    class='imageCard__container'
    @click='changeModalStateView'
  >
    <div class='imageCard__imageWrapper' >
      <BaseImage
        :image='imageSrc'
        class='imageCard__preview'
        alt='My work preview'
      />
      <BaseModal
        v-if='showModal'
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <BaseImage
          :image='image'
          class='wrapper__image__fullSize'
        />

        <BaseImage
          :image='image'
          class='wrapper__image__fullSize mobile'
        />
      </BaseModal>
    </div>
  </div>
</template>

<script>

import BaseModal from './BaseModal.vue'
import BaseImage from './BaseImage.vue'

export default {
  name: 'BaseImageCard',
  props: {
    image: {
      required: true,
    }
  },
  components: {
    BaseImage,
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
    imageSrc() {
      return this.$props.image
    }
  }
}
</script>

<style lang='scss' scoped>
.imageCard__container {
  display: flex;
  flex: 1 1 40%;
  overflow: hidden;
  transition: all 1s ease-in-out;
  height: 33%;
  @media screen and (max-width: 480px) {
    flex: 1 0 80%;
    &:hover {
      flex-basis: 80%;
    }
  }
}
.imageCard__imageWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: fit-content;
  }
}
.imageCard__preview {
  width: 100%;
  height: auto;
  transition: filter 1s ease-in-out, opacity 0.4s ease-in-out;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
}
.wrapper__image__fullSize {
  height: calc(100vh - 50px);
  @media screen and (max-width: 480px) {
    display: none;
  }
  &.mobile {
    display: none;
    @media screen and (max-width: 480px) {
      display: flex;
      height: auto;
      width: 100vw;
    }
  }
}



</style>
