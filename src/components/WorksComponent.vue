<template>
  <div class='worksContainer'>
    <div class='worksContainer__background'>
      <img src='../assets/images/worksBackground.jpeg' class='background__image'/>
    </div>

    <div class='worksContainer__content'>
      <div class='content__scrollContainer'>
        <BaseImageCard
          v-for='(image, index) in albumsArray'
          :title='image.title'
          :urls='image.urls'
          :album-url='image.albumUrl'
          :key='image.title+index'
        />
      </div>
    </div>
    <div class='navigationAnker' id='works'/>
  </div>
</template>

<script>
import BaseImageCard from '@/components/BaseImageCard.vue'

import workPicture1 from '@img/works/1.jpeg'
import workBackground from '@img/worksBackground.jpeg'
import headerPicture from '@img/headerPictures.jpeg'
export default {
  name: 'WorksComponent',
  components: { BaseImageCard },
  data() {
    return {
      albumsArray: [
        {
          title: 'Album name',
          urls: [
            workPicture1,
            // eslint-disable-next-line max-len
            'https://sun6-23.userapi.com/impg/lbdZQ8Ps76JMA-jTcc1q5Al5tPzI7Idmb6XvvQ/b5h6sjXUY7U.jpg?size=2560x1707&quality=96&sign=f87629e7dba381938fe5d1bf6fa296f6&type=album'
          ],
          albumUrl: 'https://vk.com/album-204896907_286507131'
        },
        {
          title: 'Album name',
          urls: [
            workBackground,
            workPicture1
          ],
          albumUrl: 'https://vk.com/album-204896907_286507131'
        },
        {
          title: 'Album name',
          urls: [
            // eslint-disable-next-line max-len
            'https://sun6-23.userapi.com/impg/lbdZQ8Ps76JMA-jTcc1q5Al5tPzI7Idmb6XvvQ/b5h6sjXUY7U.jpg?size=2560x1707&quality=96&sign=f87629e7dba381938fe5d1bf6fa296f6&type=album',
            headerPicture,
          ],
          albumUrl: 'https://vk.com/album-204896907_286507131'
        },
      ]
    }
  }
}
</script>

<style scoped lang='sass'>
.worksContainer
  display: flex
  width: 100%
  height: calc(100vh - 50px)
  padding: 40px 0
  color: #222222
  font-size: 40px
  justify-content: center
  overflow: hidden

.worksContainer__background
  position: absolute
  top: 0
  left: 0
.background__image
  width: 100vw
  filter: brightness(0.4)

.worksContainer__content
  width: 100vw
  padding: 10px
  overflow: hidden

.content__scrollContainer
  display: flex
  gap: 30px
  overflow: scroll
  padding: 10px 0

.navigationAnker
  position: absolute
  top: -58px

</style>
