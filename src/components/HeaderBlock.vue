<template>
  <div class='headerContainer' id='home'>
    <div class='header__networks'>
      <div class='header__separator'/>
      <div class='linkContainer'>
        <a href='https://vk.com/mashamoroz.photo' target='_blank'>
          <img :src='vkIcon' class='networks__svg' alt=''/>
        </a>
        <div>Moй VK</div>
      </div>

      <div class='linkContainer'>
        <a href='https://t.me/marvelsan' target='_blank'>
          <img :src='telegram' class='networks__svg' alt/>
        </a>
        <div>Moй Telegram</div>
      </div>

      <div class='header__separator'/>
    </div>
    <div class="header__MessageContainer">
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h1 class="title">{{ title }}</h1>
    </div>
    <a href='#about' class='header__goDownButton'>
      <img :src='arrowDown' alt='' class='networks__svg --noFilters'/>
      Продолжить
    </a>
  </div>
</template>

<script>
import vkIcon from '@/assets/icons/vk.svg'
import telegram from '@/assets/icons/telegram.svg'
import arrowDown from '@/assets/icons/arrowDown.svg'

export default {
  data() {
    return {
      title: 'Зафиксировать вечность',
      subtitle: 'Маша Мороз',
      vkIcon,
      telegram,
      arrowDown,
    }
  }
}
</script>
<style scoped lang='sass'>
$padding: 40px
$mobilePadding: 10px

.headerContainer
  display: flex
  padding: $padding
  color: #ffffff
  font-weight: 900
  height: 100vh
  justify-content: center
  align-items: center
  @media screen and (max-width: 480px)
    font-weight: bold
    padding: 10px

.header__centralBlock
  width: 100%
  display: flex
  flex-direction: column
  align-items: center

.header__MessageContainer
  display: flex
  flex-direction: column
  text-align: center
  @media screen and (max-width: 480px)
    width: 285px

.title
  font-size: 130px
  animation: photoAppear 0.8s forwards
  animation-delay: 0.8s
  opacity: 0
  line-height: 1

  @media screen and (max-width: 480px)
    align-self: flex-end
    font-size: 60px

@keyframes photoAppear
  from
    opacity: 0

  to
    opacity: 1

.subtitle
  font-size: 40px
  animation: photoAppear 0.8s forwards
  animation-delay: 1.6s
  opacity: 0
  @media screen and (max-width: 480px)
    font-size: 30px

.header__networks
  display: flex
  flex-direction: column
  position: absolute
  height: calc(100vh - 80px)
  justify-content: space-around
  gap: 20px
  z-index: 2
  top: $padding
  left: $padding

  @media screen and (max-width: 480px)
    top: $mobilePadding
    left: $mobilePadding
    height: calc(100vh - $mobilePadding - $mobilePadding)

.header__separator
  width: 6px
  flex: 1 1 auto
  margin-left: 12px
  background-color: #f2f2f2

.networks__svg
  width: 30px
  margin-right: 10px
  filter: invert(1)
  &.--noFilters
    margin-right: 0
    filter: none

.linkContainer
  display: flex
  width: 30px
  align-items: center
  overflow: hidden
  font-size: 30px
  line-height: 20px

  white-space: pre
  transition: width 0.2s ease-in-out
  &:hover
    width: 300px
    @media screen and (max-width: 480px)
      width: 30px

.header__goDownButton
  position: absolute
  font-size: 30px
  border-radius: 20px
  padding: 5px
  background: white
  color: black
  white-space: nowrap
  line-height: 1

  width: 40px
  overflow: hidden

  bottom: 10px
  right: 50%
  transform: translate(50%, 0)
  transition: width 0.5s ease-in-out
  align-items: center

  &:hover
    width: 180px

  @media screen and (max-width: 480px)
    bottom: 10%

</style>
