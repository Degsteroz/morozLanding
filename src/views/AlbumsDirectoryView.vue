<template>
  <div class='albumDirectoryView'>
    <header>
      <div
        class='directory__backButton'
        @click='goBack'
      >
        BACK
      </div>
      <h1 class='directory__name'>
        {{ name }}
      </h1>
    </header>

    <div class='albumsWrapper'>
      <AlbumComponent
        :album='album'
        :key='album.main'
        v-for='album in albums'
        class='albumComponent'
      />
    </div>
  </div>
</template>

<script setup>
import AlbumComponent from '@/components/AlbumComponent.vue'
import { useRoute, useRouter } from 'vue-router'

import {
  ALBUMS,
  WORKS_TYPES
} from '@/pageData'

const route = useRoute()
const router = useRouter()

const { id } = route.params
const albums = ALBUMS[id]
const { name } = WORKS_TYPES.find(type => type.id === id)

window.scroll({
  top: 0,
  behavior: 'smooth'
})

function goBack() {
  router.back()
}


</script>

<style scoped lang='sass'>
.albumDirectoryView
  padding: 10px 20px
  width: 100%
  display: flex
  flex-direction: column
  min-height: 100vh
  background-color: rgb(39, 43, 94)

header
  display: grid
  color: white
  margin-bottom: 20px

.directory__backButton
  cursor: pointer
  font-size: 24px
  width: fit-content
  padding: 5px 10px
  border-radius: 6px
  transition: all 0.1s ease-in-out
  &:hover
    background-color: white
    color: black


.directory__name
  font-size: 70px
.albumsWrapper
  display: flex
  flex-direction: row
  justify-content: center
  gap: 10px
  flex-wrap: wrap

.albumComponent
  border-radius: 8px
  cursor: pointer
</style>
