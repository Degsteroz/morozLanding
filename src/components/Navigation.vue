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
          title: 'About',
          href: '#about'
        },
        {
          title: 'My works',
          href: '#works'
        },
        {
          title: 'Contacts',
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
  background-color: #23395B
  gap: 40px
  position: sticky
  top: 0
  z-index: 10
  justify-content: center

.navigation__link
  color: #f2f2f2
  font-size: 30px
  font-weight: 700
  transition: color 0.3s ease-in-out

  &:hover
    color: #e19533

</style>
