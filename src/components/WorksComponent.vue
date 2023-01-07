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
      <BaseAlbumsDirectory
        :directory='directory'
        v-for='directory in workTypes'
        :key='directory.id'
        @mouseenter='changeBackgroundImage(directory)'
      />
    </div>
    <div class='navigationAnker' id='works'/>
  </div>
</template>

<script>
import BaseAlbumsDirectory from '@/components/BaseAlbumsDirectory.vue'
import {
  WORKS_TYPES,
  WORK_BACKGROUND,
  FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX
} from '@/pageData'

export default {
  name: 'WorksComponent',
  components: { BaseAlbumsDirectory },
  data() {
    return {
      background: WORK_BACKGROUND,
      workTypes: WORKS_TYPES
    }
  },
  methods: {
    changeBackgroundImage(album) {
      this.background = album.cover
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
  min-height: calc(100vh - 50px)
  padding: 10px 0
  color: #222222
  font-size: 70px
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
  opacity: 1

.slide-fade-enter
  opacity: 1

.slide-fade-leave-to
  opacity: 0

.background__image
  width: 100vw
  filter: brightness(0.4)
  -webkit-transition: all 3s ease
  transition: all 0.3s ease
  z-index: -1
  @media screen and (max-width: 480px)
    width: auto
    height: 100vh

.work__header
  font-size: 70px
  color: var(--white)

.worksContainer__content
  width: calc(100vw - 20px)
  height: fit-content
  justify-content: center
  display: flex
  padding: 10px
  gap: 10px
  flex-wrap: wrap
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
