<template>
  <div class='albumViewerComponent'>
    <div class='photoPreviewsContainer' ref='photoPreviewContainer'>
      <div class='photoPreviewContent'>
        <div
          class='photoPreviewsWrapper'
          :class='{"--active": index === currentImageIndex}'
          v-for='(url, index) in photosUrl'
          :key='url'
          ref='photoPreview'
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

    <div class='viewerWrapper' ref='albumViewer'>
      <BaseImageCard
        :image='photoUrlInViewer'
        :key='currentImageIndex'
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX } from '@/pageData'
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
  mounted() {
    const xDown = ref(null);

    function getTouches(evt) {
      return evt.touches
    }

    const getCurrentImageIndex = (value) => {
      if (this.currentImageIndex + value < 0) {
        return this.photosArray.length - 1
      }

      if (this.currentImageIndex + value > this.photosArray.length - 1) {
        return 0
      }

      return this.currentImageIndex + value
    }

    function handleTouchStart(evt) {
      const [firstTouch] = getTouches(evt);
      xDown.value = firstTouch.clientX;
    }

    const handleTouchMove = (evt) => {
      if (!xDown.value) {
        return;
      }
      this.prevImageIndex = this.currentImageIndex

      const [{clientX: xUp}] = evt.touches

      const xDiff = xDown.value - xUp;

      if (!xDiff) return

      const isLeftSwipe = xDiff >= 0

      this.currentImageIndex = getCurrentImageIndex(
        isLeftSwipe
          ? 1
          : -1
      )

      xDown.value = null;

      const { width, x } = this.$refs.photoPreview[this.currentImageIndex]
        .getBoundingClientRect()


      this.$refs.photoPreviewContainer.scrollBy({
        left: x - (width / 2),
        behavior: 'smooth'
      })
    }

    this.$refs.albumViewer.addEventListener('touchstart', handleTouchStart, false);
    this.$refs.albumViewer.addEventListener('touchmove', handleTouchMove, false);
  },
  data() {
    return {
      currentImageIndex: 0,
      prevImageIndex: 0,
    }
  },
  computed: {
    photosArray() {
      return this.$props.photos
    },
    photosUrl() {
      return this.photosArray
        .map(photo => FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX + photo)
    },
    photoUrlInViewer() {
      return this.photosArray[this.currentImageIndex]
    },
    transitionName() {
      const isLeft = this.currentImageIndex >= this.prevImageIndex
      return !isLeft ? 'transitionRight' : 'transitionLeft'
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
  transition: all 0.1s linear
  padding-bottom: 7px

  &.--active
    margin-left: 15px

  @media screen and (max-width: 480px)
    flex-basis: auto

    &.--active
      margin-left: 0
      padding-bottom: 2px
      border-bottom: black 5px solid

.photoPreviewContent
  position: relative
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

//.transitionRight
//  position: relative
//  transition: all 0.4s ease-in-out
//  transform: translateX(400px)
//
//
//.transitionRight-enter
//  position: relative
//  transition: all 0.4s ease-in-out
//  transform: translateX(-50px)
//
//.transitionRight-enter-to
//  transform: translateX(0)
//
//.transitionRight-leave
//  transition: all 0.4s ease-in-out
//  transform: translateX(0)
//
//.transitionRight-leave-to
//  transform: translateX(50px)
//
//
//
//.transitionLeft-enter
//  margin-right: 300px
//
//.transitionLeft-leave
//  margin-left: 200px
</style>
