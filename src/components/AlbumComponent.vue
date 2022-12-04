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

export default {
  name: 'AlbumComponent',
  components: { BaseImage, BaseImageCard, BaseModal },
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
    flex: 1 0 80%;
    &:hover {
      flex-basis: 80%;
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
    width: 100%;
    height: fit-content;
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
}

</style>
