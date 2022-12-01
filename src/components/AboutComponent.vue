<template>
  <div class='aboutContainer'>
    <div class='about__content'>
      <div class='about__imageContainer'>
        <div class='anker' v-element-visibility="onElementVisibility"/>
        <img
          :src='ABOUT_PHOTO'
          class='about__image'
          :class="{'--visible': isFirstAnkerVisible}"
          alt=''
        />
      </div>
      <div class='about__textBlock'>
        <div class='about__textContainer'>
          <div
            v-for='paragraph in paragraphs'
            class='about__text'
            :key='paragraph'
          >
            {{paragraph}}
          </div>
        </div>
      </div>
      <h1 class='about__title'>{{title}}</h1>
    </div>
    <div class='about__content__mobile'>
      <div class='about__imageContainer'>
        <img
          :src='ABOUT_PHOTO'
          class='about__image'
          :class="{'--visible': isFirstAnkerVisible}"
          alt=''
        />
      </div>
      <div class='about__textBlock'>
        <div
          class='about__text'
          v-for='paragraph in mobileParagraphs'
          :key='paragraph'
        >
          {{paragraph}}
        </div>
      </div>
    </div>
    <div class='navigationAnker' id='about'/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { vElementVisibility } from '@vueuse/components'
import { ABOUT_PHOTO } from '@/pageData'

const isFirstAnkerVisible = ref(false)

function onElementVisibility(state) {
  isFirstAnkerVisible.value = state
}

const title = 'Обо мне'
const paragraphs = [
  'Меня зовут Маша Мороз. Я портретный фотограф. Люблю людей, их аутентичность ' +
  'и их истории. Именно поэтому мне так нравится, когда в моем кадре есть человек. ',
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

const mobileParagraphs = [
  paragraphs[0],
  paragraphs[3],
  paragraphs[7]
]
</script>

<style scoped lang='sass'>
.aboutContainer
  display: flex
  flex-direction: column
  align-items: center
  position: relative

  width: 100%
  background-color: var(--yellow)
  color: var(--black)

  padding: 20px 0

.about__content
  display: flex
  max-width: 1200px
  justify-content: center
  @media screen and (max-width: 480px)
    display: none

.about__imageContainer
  width: 380px
  height: 570px
  position: sticky
  top: 100px
  background-color: #fffefe
  border-radius: 50% 50% 0 0

  @media screen and (max-width: 480px)
    width: 100px
    height: 100px
    overflow: hidden
    border-radius: 50%


.about__image
  width: 100%
  transform: scale(0.1)
  position: absolute
  opacity: 0
  transition: all 0.5s ease-in-out
  &.--visible
    transform: scale(1)
    opacity: 1

.about__textBlock
  display: flex
  flex-direction: column
  width: 50%
  font-size: 30px
  padding-left: 50px
  @media screen and (max-width: 480px)
    width: 80%
    gap: 20px
    padding-left: 20px

.about__title
  font-size: 50px
  height: fit-content
  margin: 0 auto
  line-height: 1
  position: sticky
  top: 45%

.about__textContainer
  display: flex
  flex-direction: column
  gap: 30px

.about__text
  width: 100%
  line-height: 1.4
  display: flex
  flex: 0 0 auto

.textBlock__navigatorContainer
  padding: 7px
  display: flex
  justify-content: space-between

.anker
  position: absolute
  top: 5%
  height: 90%

.navigationAnker
  position: absolute
  top: -58px
.about__content__mobile
  display: none
  width: 100%
  padding: 0 20px
  @media screen and (max-width: 480px)
    display: flex

</style>
