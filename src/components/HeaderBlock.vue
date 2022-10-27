<template>
  <div class='headerContainer'>
    <div class='header__networks'>
      <div class='header__separator'/>
      <div class='linkContainer'>
        <a href='https://vk.com/mashamoroz.photo' target='_blank'>
          <img :src='vkIcon' class='networks__svg' alt=''/>
        </a>
        <div>Moй VK</div>
      </div>

      <div class='linkContainer'>
        <a href='https://instagram.com/muamarvel/' target='_blank'>
          <img :src='insIcon' class='networks__svg' alt/>
        </a>
        <div>Moй Instagram</div>
      </div>

      <div class='header__separator'/>
    </div>
    <div class="header__MessageContainer">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h2 class="secondSubtitle">{{secondSubtitle}}</h2>
    </div>
  </div>
</template>

<script>
import vkIcon from '@/assets/icons/vk.svg'
import insIcon from '@/assets/icons/instagram.svg'

export default {
  data() {
    return {
      title: 'Привет',
      subtitle: 'Меня зовут Маша Мороз',
      secondSubtitle: 'Я - твой будущий фотограф',
      vkIcon,
      insIcon,
    }
  }
}
</script>
<style scoped lang='sass'>
.headerContainer
  display: flex
  padding: 40px
  opacity: 0.8
  color: #ffffff
  font-weight: 900

.header__MessageContainer
  width: 100vw
  height: calc(100vh - 80px)

  display: grid
  grid-template-columns: 1fr
  grid-template-rows: auto 30px auto 1fr
  justify-content: flex-end
  text-align: right

.title
  font-size: 80px
  grid-column: -1
  grid-row: 1
  animation: photoAppear 0.8s forwards
  animation-delay: 0.8s
  opacity: 0

.subtitle
  font-size: 80px
  grid-row: 3
  grid-column: -1
  animation: photoAppear 0.8s forwards
  animation-delay: 1.6s
  opacity: 0

.secondSubtitle
  font-size: 110px
  grid-row: 4
  grid-column: -1
  animation: photoAppear 0.8s forwards
  animation-delay: 2.4s
  opacity: 0

@keyframes photoAppear
  from
    opacity: 0

  to
    opacity: 1

.header__networks
  display: flex
  flex-direction: column
  height: calc(100vh - 80px)
  justify-content: space-around
  gap: 20px

.header__separator
  width: 6px
  flex: 1 1 auto
  margin-left: 12px
  background-color: #f2f2f2

.networks__svg
  width: 30px
  margin-right: 10px
  filter: invert(1)

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
</style>
