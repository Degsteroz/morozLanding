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
        v-if='!showModal'
      />

      <div class='album__statisticContainer'>
        <div class='statistic__count'>
          {{albumName}}
        </div>
      </div>
    </div>

    <BaseModal v-if='showModal'>
      <div class='album__photosWrapper'>
        <div class='backButtonContainer'>
          <img
            :src='arrowDown'
            class='arrow__svg'
            alt='back button'
          />
        </div>

        <AlbumViewer :photos='photosIds' />
      </div>
    </BaseModal>
  </div>
</template>
<script>
import AlbumViewer from './AlbumViewer.vue'
import BaseModal from './BaseModal.vue'
import BaseImage from './BaseImage.vue'

import arrowDown from '@/assets/icons/arrowDown.svg'

export default {
  name: 'AlbumComponent',
  components: {
    BaseImage,
    AlbumViewer,
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
    },
    albumName() {
      return this.$props.album.name
    }
  }
}
</script>
<style lang='scss' scoped>
.albumContainer {
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  max-width: fit-content;
  overflow: hidden;
  transition: all 1s ease;
  @media screen and (max-width: 480px) {
    width: 100%;
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
    height: 100%;
  }
}

.album__statisticContainer {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 70px;
  padding: 5px;
  font-weight: bold;
}

.statistic__title {
  font-size: 26px;
  text-align: center;
}

.statistic__count {
  font-size: 32px;
  text-align: center;
}

.album__photosWrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  gap: 5px;
  align-self: baseline;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    width: 100vw;
    height: 100%;
    position: relative;
    flex-direction: column;
  }
}

.backButtonContainer {
  position: fixed;
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
