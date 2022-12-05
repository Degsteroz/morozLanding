<template>
  <div class='worksContainer'>
    <div class='worksContainer__background'>
      <transition name="slide-fade">
        <img
          :src='imageSource'
          class='background__image'
          :key='background'
          alt='Background picture'
        />
      </transition>
    </div>
    <div class='work__header'>Мои работы</div>

    <div class='worksContainer__content'>
      <AlbumComponent
        :album='album'
        :key='album.main'
        v-for='album in albumsArray'
        @mouseenter='() => changeBackgroundImage(album)'
      />
    </div>
    <div class='navigationAnker' id='works'/>
  </div>
</template>

<script>
import AlbumComponent from '@/components/AlbumComponent.vue'
import {
  WORK_PHOTO,
  WORK_BACKGROUND,
  FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX
} from '@/pageData'

export default {
  name: 'WorksComponent',
  components: { AlbumComponent },
  data() {
    return {
      background: WORK_BACKGROUND,
      albumsArray: WORK_PHOTO
    }
  },
  methods: {
    changeBackgroundImage(image) {
      this.background =  image.prefix + image.main
    }
  },
  computed: {
    imageSource() {
      return FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + this.background
    }
  },
}
</script>

<style scoped lang='sass'>
.worksContainer
  display: flex
  flex-direction: column
  width: 100%
  height: calc(100vh - 50px)
  padding: 10px 0
  color: #222222
  font-size: 40px
  justify-content: center
  align-items: center
  overflow: hidden

.worksContainer__background
  position: absolute
  display: flex
  top: 0
  left: 0
  @media screen and (max-width: 480px)
    width: 100vw
    overflow: hidden
    justify-content: center

.slide-fade-enter-active
  opacity: 0

.slide-fade-leave-active
  opacity: 0

.slide-fade-enter,
.slide-fade-leave-to
  opacity: 0

.background__image
  width: 100vw
  filter: brightness(0.4)
  -webkit-transition: all 3s ease
  transition: all 0.5s ease
  z-index: -1
  @media screen and (max-width: 480px)
    width: auto
    height: 100vh

.work__header
  font-size: 50px
  color: var(--white)

.worksContainer__content
  width: calc(100vw - 20px)
  height: fit-content
  display: flex
  padding: 10px
  overflow: hidden
  @media screen and (max-width: 480px)
    flex-direction: column
    height: auto


.worksContainer__content__mobile
  display: none
  @media screen and (max-width: 480px)
    display: flex
    overflow: scroll
    width: 100vw
.content__scrollContainer
  display: flex
  padding: 0 -20px

.navigationAnker
  position: absolute
  top: -58px

</style>
