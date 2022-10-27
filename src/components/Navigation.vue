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

<style scoped>
.navigation__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  background-color: #23395B;
}
.navigation__link {
  color: #f2f2f2;
}
</style>
