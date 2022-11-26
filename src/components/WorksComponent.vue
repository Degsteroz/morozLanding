<template>
  <div class='worksContainer'>
    <div class='worksContainer__background'>
      <transition name="slide-fade">
        <img :src='background' class='background__image' :key='background'/>
      </transition>
    </div>
    <div class='work__header'>Мои работы</div>

    <div class='worksContainer__content'>
      <BaseImageCard
        v-for='(image, index) in albumsArray'
        :image='image'
        :key='image+index'
        :onmouseover='() => changeBackgroundImage(image)'
      />
    </div>
    <div class='navigationAnker' id='works'/>
  </div>
</template>

<script>
import BaseImageCard from '@/components/BaseImageCard.vue'
import { WORK_PHOTO, WORK_BACKGROUND } from '@/pageData'
export default {
  name: 'WorksComponent',
  components: { BaseImageCard },
  data() {
    return {
      background: WORK_BACKGROUND,
      albumsArray: WORK_PHOTO
    }
  },
  methods: {
    changeBackgroundImage(image) {
      this.background = image
    }
  }
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
  justify-content: flex-end
  align-items: center
  overflow: hidden

.worksContainer__background
  position: absolute
  display: flex
  top: 0
  left: 0

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

.work__header
  font-size: 50px
  color: var(--white)

.worksContainer__content
  width: calc(100vw - 20px)
  height: fit-content
  display: flex
  padding: 10px
  justify-content: center
  overflow: hidden

.navigationAnker
  position: absolute
  top: -58px

</style>
