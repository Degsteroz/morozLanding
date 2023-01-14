<template>
  <div class='albumViewerComponent'>
    <div class='photoPreviewsContainer'>
      <div class='photoPreviewContent'>
        <div
          class='photoPreviewsWrapper'
          v-for='(url, index) in photosUrl'
          :key='url'
          @click='(e) => changeCurrentImageIndex(index, e)'
        >
          <img
            :src='url'
            class='photoPreview'
            :alt='"photo #" + index'
          />
        </div>
      </div>
    </div>

    <div
      class='viewerWrapper'
      v-if='!isHidden'
    >
      <BaseImageCard :image='photoUrlInViewer' />
    </div>
  </div>
</template>

<script>
import {FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX} from '@/pageData'
import BaseImageCard from './BaseImageCard.vue'
export default {
  name: 'AlbumViewer',
  components: { BaseImageCard },
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImageIndex: 0
    }
  },
  computed: {
    photosUrl() {
      return this.$props.photos.map(photo => FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX + photo)
    },
    photoUrlInViewer() {
      return this.$props.photos[this.currentImageIndex]
    },
    isHidden() {
      return this.currentImageIndex === -1
    }
  },
  methods: {
    changeCurrentImageIndex(index, e) {
      e.stopPropagation()
      this.currentImageIndex = index
    }
  }
}
</script>

<style lang='sass' scoped>
.albumViewerComponent
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 100%
  height: 100%
  @media screen and (max-width: 480px)
    flex-direction: column
    justify-content: center
    gap: 20px

.photoPreviewsContainer
  display: flex
  position: relative
  width: 500px
  height: fit-content
  justify-content: space-between
  @media screen and (max-width: 480px)
    overflow: scroll
    width: 100%

.photoPreviewsWrapper
  display: flex
  height: auto
  border-radius: 6px
  overflow: hidden

  @media screen and (max-width: 480px)
    flex-basis: auto

.photoPreviewContent
  display: flex
  gap: 5px
  width: 100%
  flex-wrap: wrap
  @media screen and (max-width: 480px)
    flex-wrap: nowrap
    width: auto

.viewerWrapper
  display: flex
  max-height: calc(100vh - 20px)
  flex: 1 1 100%
  justify-content: center
  position: sticky
  top: 10px
  @media screen and (max-width: 480px)
    flex: 0 0 auto
    min-height: 555px
    align-items: center


.photoPreview
  display: flex
  width: 100%
  @media screen and (max-width: 480px)
    height: 120px
    width: auto

</style>
