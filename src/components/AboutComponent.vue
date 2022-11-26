<template>
  <div class='aboutContainer'>
    <div class='about__content'>
      <div class='about__imageContainer'>
        <img
          :src='ABOUT_PHOTO'
          class='about__image'
          :class="{'--visible': isVisible && (slideIndex < 4)}"
          alt=''
        />
        <img
          :src='ABOUT_PHOTO2'
          class='about__image'
          :class="{'--visible': isVisible && (slideIndex >= 4)}"
          alt=''
        />
      </div>
      <div class='about__textBlock'>

        <h1 class='about__title'>{{title}}</h1>
        <div
          class='about__textContainer'
          ref='sliderContainer'
        >
          <div
            v-for='paragraph in paragraphs'
            class='about__text'
            :key='paragraph'
          >
            {{paragraph}}
          </div>
        </div>
        <div class='textBlock__navigatorContainer'>
          <div
            v-for='(paragraph, index) in paragraphs'
            :key='paragraph'
            class='navigatorContainer__navigatorButton'
            :class="{'--active': index === slideIndex}"
            @click='navigateOnText(index)'
          />
        </div>
      </div>
    </div>


    <div class='anker' v-element-visibility="onElementVisibility"/>
    <div class='navigationAnker' id='about'/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { vElementVisibility } from '@vueuse/components'
import { ABOUT_PHOTO, ABOUT_PHOTO2 } from '@/pageData'

let interval = null
const isVisible = ref(false)
const slideIndex = ref(1)
const sliderContainer = ref(null)

function onElementVisibility(state) {
  isVisible.value = state
  slideIndex.value = 0
}

function startChangeTextBlockInterval() {
  interval = setInterval(() => {
    const paragraphWidth = 400
    const lastIndex = slideIndex.value === paragraphs.length - 1
    slideIndex.value = lastIndex
      ? 0
      : slideIndex.value + 1

    sliderContainer?.value?.scrollTo({
      left: paragraphWidth * slideIndex.value,
      behavior: lastIndex
        ? 'auto'
        : 'smooth'
    })
  }, 7000)
}

startChangeTextBlockInterval()

function navigateOnText(index) {
  sliderContainer.value.scrollTo({
    left: 400 * index,
    behavior: 'smooth'
  })

  slideIndex.value = index
  clearInterval(interval)
  startChangeTextBlockInterval()
}

const title = 'Обо мне'
const paragraphs = [
  'Меня зовут Маша Мороз. Я портретный фотограф. Люблю людей, их аутентичность ' +
  'и их истории. Именно поэтому мне так нравится, когда в моем кадре есть человек. ' +
  'Еще я фанат ролевых игр, и через фотографии мне особенно нравится рассказывать ' +
  'истории, не только лично ваши, но и ваших персонажей и историй в духе «а что если..»',
  'Я долго шла к фотографии, долго отрицала свою к этому причастность, а сейчас ' +
  'не представляю своей жизни без съемок. Это не просто работа, это страсть и то, ' +
  'через что я хочу дарить людям прекрасное.',
  'Я хочу, чтобы вы почувствовали себя красивым, уверенным в себе и особенным. ' +
  'Потому что мое фото - это не про нарисованный образ, а исключительно про вас.',
  'Я не люблю ретушь, она рождает в нас комплексы, поэтому не стоит рассчитывать ' +
  'на видоизменения вас на моих фото. Там будете только вы. Потому что фотографии ' +
  'должны прививать любовь к себе настоящему.',
  'Я очень трепетный фотограф, с психологическим образованием поэтому обещаю, что ' +
  'на съемке со мной будет комфортно. Я подскажу, что делать в кадре, помогу расслабиться.',
  'Наша съемка будет не только про результат, но и в какой-то степени про ' +
  'психотерапевтичный процесс. А еще к каждой съемке я подхожу очень индивидуально. ' +
  'Образ, локация, идея.',
  'Поэтому знакомство и подготовка к съемке должна проходить хотя бы за неделю до. ' +
  'Вам не нужно беспокоиться за организацию, я вам все объясню и подскажу.'
]
</script>

<style scoped lang='sass'>
.aboutContainer
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-end
  position: relative

  width: 100%
  background-color: var(--yellow)
  color: var(--black)
  height: calc(100vh - 58px)

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
  position: absolute
  &.--visible
    margin-left: 0
    opacity: 1

.about__textBlock
  display: flex
  overflow: hidden
  flex-direction: column
  max-width: 400px
  font-size: 30px

.about__title
  font-size: 50px
  display: flex
  margin: 0 auto
  line-height: 1.5

.about__textContainer
  display: flex
  overflow: hidden

.about__text
  width: 400px
  display: flex
  flex: 0 0 auto

.textBlock__navigatorContainer
  padding: 7px
  display: flex
  justify-content: space-between

.navigatorContainer__navigatorButton
  width: 10px
  height: 10px
  border-radius: 50%
  background-color: #ff0046
  &:hover
    transition: all 0.4s ease-in-out
    transform: scale(1.3)
    animation-delay: 0.4s
    background-color: aqua

  &.--active
    transform: scale(1.3)
    background-color: white
.anker
  position: absolute
  top: 50%

.navigationAnker
  width: 10px
  height: 10px
  background-color: red
  position: absolute
  top: -58px

</style>
