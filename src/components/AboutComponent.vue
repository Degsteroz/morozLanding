<template>
  <div class='aboutContainer'>
    <div class='about__content'>
      <div class='about__imageContainer'>
        <img
          src='src/assets/images/about2.png'
          class='about__image'
          :class="{'--visible': isVisible}"
          alt=''
        />
      </div>

      <div class='about__textBlock'>
        <div class='about__title'>
          <h1>{{title}}</h1>
        </div>
        Ну тут какой-то текст про тебя. Я хз, что писать, если честно
      </div>
    </div>


    <div class='anker' v-element-visibility="onElementVisibility"/>
    <div class='navigationAnker' id='about'/>
  </div>
</template>

<script setup>
import { vElementVisibility } from '@vueuse/components'
import { ref } from 'vue'


const isVisible = ref(false)

function onElementVisibility(state) {
  isVisible.value = state
}

const title = 'Обо мне'
</script>

<style scoped lang='sass'>
.aboutContainer
  display: flex
  flex-direction: column
  align-items: center
  position: relative

  width: 100%
  background-color: #f8d549
  color: #181818

.about__title
  font-size: 40px
  display: flex
  margin: 0 auto
  line-height: 1

.about__content
  display: flex
  max-width: 1200px
  align-items: center

.about__imageContainer
  width: 380px
  height: 570px
  position: relative

.about__image
  width: 380px
  margin-left: -200px
  opacity: 0
  transition: all 0.5s ease-in-out
  z-index: 3
  &.--visible
    margin-left: 0
    opacity: 1

.about__textBlock
  display: flex
  flex-direction: column
  flex: 1 1 500px
  font-size: 30px

.anker
  position: absolute
  top: 50%

.navigationAnker
  position: absolute
  top: -58px
</style>
