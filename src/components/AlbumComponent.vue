<template>
  <div
    class='albumContainer'
    @click='changeModalStateView'
  >
    <div class='album__previewWrapper' >
      <BaseImage
        :src='imageSrc'
        :image='imageSrc'
        class='wrapper__image'
        alt='My work preview'
      />
    </div>

    <BaseModal
      v-if='showModal'
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <div class='album__photosWrapper'>
        <div class='backButtonContainer'>
          <img :src='arrowDown' class='arrow__svg'/>
        </div>
        <BaseImageCard
          :image='photo'
          v-for='photo in photosIds'
          :key='photo'
        />
      </div>

    </BaseModal>
  </div>
</template>
<script>
import BaseImageCard from './BaseImageCard.vue'
import BaseModal from './BaseModal.vue'
import BaseImage from './BaseImage.vue'

import arrowDown from '@/assets/icons/arrowDown.svg'

export default {
  name: 'AlbumComponent',
  components: {
    BaseImage,
    BaseImageCard,
    BaseModal,
  },
  props: {
    album: {
      type: Object,
      required: true,
    }
  },
  methods: {
    changeModalStateView(e) {
      e.stopPropagation()
      this.showModal = !this.showModal
    }
  },

  data() {
    return {
      arrowDown,
      showModal: false,
    }
  },
  computed: {
    photosIds() {
      const {prefix, photos} = this.$props.album
      return photos.map(photo => prefix + photo)
    },
    imageSrc() {
      const {prefix, main} = this.$props.album
      return prefix + main
    }
  }
}
</script>
<style lang='scss' scoped>
.albumContainer {
  display: flex;
  flex: 1 1 100px;
  flex-direction: column;
  max-width: fit-content;
  overflow: hidden;
  transition: all 1s ease;
  &:hover {
    flex-basis: 300px;
  }
  @media screen and (max-width: 480px) {
    height: 100px;
    width: 100%;
    &:hover {
      flex-basis: 100px;
    }
  }
}
.album__previewWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 400px;
  position: relative;
  @media screen and (max-width: 480px) {
    flex: 1 1 100%;
    width: 100%;
  }
}

.album__photosWrapper {
  width: calc(100vw - 20px);
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  gap: 5px;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
}

.backButtonContainer {
  position: absolute;
  display: flex;
  top: 10px;
  left: 0;
  z-index: 10;

  border-radius: 50%;
  height: 40px;
  width: 40px;

  opacity: 0.8;
  background-color: #000000;
}
.arrow__svg {
  width: 40px;
  height: 40px;
  filter: invert(1);
  transform: rotate(90deg);
}

</style>
