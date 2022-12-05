<template>

  <nav class="navigation__container">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      class="navigation__link"
    >
      {{link.title}}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
  data() {
    return {
      links: [
        {
          title: 'Домой',
          href: '#home'
        },
        {
          title: 'Обо мне',
          href: '#about'
        },
        {
          title: 'Примеры работ',
          href: '#works'
        },
        {
          title: 'Прайс',
          href: '#price'
        },
        {
          title: 'Контакты',
          href: '#contacts'
        },
      ]
    }
  }
}
</script>

<style scoped lang='sass'>
.navigation__container
  width: 100%
  display: flex
  flex-direction: row
  padding: 5px 0
  background-color: var(--darkBlue)
  gap: 40px
  position: sticky
  top: 0
  z-index: 10
  justify-content: center
  @media screen and (max-width: 480px)
    height: 58px
    align-items: center

.navigation__link
  color: var(--white)
  font-size: 30px
  font-weight: 700
  transition: color 0.3s ease-in-out
  @media screen and (max-width: 480px)
    font-size: 15px

  &:hover
    color: #e19533

</style>
