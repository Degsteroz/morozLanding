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
      >
        <BaseImage
          :image='image'
          class='wrapper__image__fullSize'
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
      e.preventDefault()
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
  flex: 0 0 10%;
  transition: all 1s ease-in-out;
  justify-content: center;
  @media screen and (max-width: 480px) {
    flex: 0 0 auto;
    height: fit-content;
    width: 100%;
  }
}
.imageCard__imageWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
}
.imageCard__preview {
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
    display: flex;
    height: auto;
    width: calc(100vw - 10px);
  }
}
</style>
