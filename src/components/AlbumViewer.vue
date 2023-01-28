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

    <div class='contentContainer'>
      <div class='viewerWrapper' ref='albumViewer'>
        <BaseImageCard
          :image='photoUrlInViewer'
          :key='currentImageIndex'
        />
        <img :src='swipeIcon' class='swipeIcon' alt=''/>
      </div>

      <div class='arrowContainer'>
        <img
          class='arrow left'
          :src='arrowIcon'
          alt='Navigation arrow'
          @click='(event) => handleArrowClick(1, event)'
        />
        <img
          class='arrow right'
          :src='arrowIcon'
          alt='Navigation arrow'
          @click='(event) => handleArrowClick(1, event)'
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { FORMATTED_SCALED200_LOW_QUALITY_IMAGE_PREFIX } from '@/pageData'
import BaseImageCard from './BaseImageCard.vue'
import arrowIcon from '@/assets/icons/arrowDown.svg'
import swipeIcon from '@/assets/icons/swipe.svg'
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

      if (!xDiff || Math.abs(xDiff) < 15) return

      const isLeftSwipe = xDiff >= 0

      this.currentImageIndex = this.getCurrentImageIndex(
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
      arrowIcon,
      swipeIcon
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
    },
    getCurrentImageIndex(value) {
      if (this.currentImageIndex + value < 0) {
        return this.photosArray.length - 1
      }

      if (this.currentImageIndex + value > this.photosArray.length - 1) {
        return 0
      }

      return this.currentImageIndex + value
    },
    handleArrowClick(value, e) {
      e.stopPropagation()
      this.currentImageIndex = this.getCurrentImageIndex(value)
    }
  }
}
</script>

<style lang='sass' scoped>
.albumViewerComponent
  display: flex
  position: relative
  flex-direction: row
  width: 100%
  height: 100%
  @media screen and (max-width: 480px)
    flex-direction: column
    justify-content: center
    gap: 10px
    flex: 1 1 auto

.photoPreviewsContainer
  position: relative
  width: 300px
  display: flex
  flex: 1 1 auto
  height: fit-content
  justify-content: space-between
  @media screen and (max-width: 480px)
    overflow: scroll
    width: 100%
    flex: 1 1 120px

.photoPreviewsWrapper
  display: flex
  height: auto
  border-radius: 6px
  overflow: hidden
  transition: all 0.1s linear

  &.--active
    padding-right: 1px
    border-right: rgb(93, 121, 215) 5px solid

  @media screen and (max-width: 480px)
    flex-basis: auto
    padding: 0 0 7px 0

    &.--active
      margin-left: 0
      padding-bottom: 2px
      border-right: none
      border-bottom: black 5px solid

.photoPreviewContent
  position: relative
  display: flex
  gap: 5px
  width: 100%
  flex: 1 1 auto
  flex-wrap: wrap
  @media screen and (max-width: 480px)
    flex-wrap: nowrap
    width: auto

.contentContainer
  position: sticky
  top: 10px
  max-height: calc(100vh - 20px)
  display: flex
  flex-direction: column
  gap: 10px
  flex: 1 1 100%
  align-items: center

.viewerWrapper
  display: flex
  position: relative
  justify-content: center
  flex: 1 1 100%
  height: 90%

  @media screen and (min-width: 481px) and (max-width: 1025px)
    height: 70vh
    width: 50%
    flex: 2 1 auto
    top: 15%

  @media screen and (max-width: 480px)
    flex: 1 1 100%
    min-height: 50%
    width: 100%
    align-items: center

.swipeIcon
  position: absolute
  top: 50%
  width: 90px
  filter: invert(1)
  opacity: 0
  animation: swipe 1s linear
  animation-iteration-count: 1

  @keyframes swipe
    0%
      margin-left: -100px
      opacity: 0
    50%
      opacity: 1
    100%
      margin-left: 100px
      opacity: 0

.photoPreview
  display: flex
  width: 100%
  @media screen and (max-width: 480px)
    display: block
    height: 120px
    width: auto

.arrowContainer
  display: flex
  justify-content: space-between
  gap: 200px
  @media screen and (max-width: 480px)
    display: none

.arrow
  width: 40px
  z-index: 1
  transition: all 0.1s linear

  &:hover
    opacity: 0.2

  &.left
    transform: rotate(90deg)

  &.right
    transform: rotate(-90deg)
</style>
