<template>
  <div class='contactComponent' id='contacts'>
    <div class='contactContainer'>
      <div class='contactContent'>
        <h2>Обратная связь</h2>

        <div class='contactDescription'>
          Связаться со мной по всем вопросам вы можете по любой из ссылок
        </div>

        <div class='contactLinksContainer'>
          <a
            :href='social.link'
            target='_blank'
            class='contactLink'
            v-for='social in socialArray'
            :key='social.title'
          >
            <img
              :src='social.icon'
              class='contactIcon'
              :alt='social.title + "icon"'
            />

            <span>
              {{social.title}}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vkIcon from '@/assets/icons/vk.svg'
import telegram from '@/assets/icons/telegram.svg'
export default {
  name: 'ContactComponent',
  data() {
    return {
      vkIcon,
      socialArray: [
        {
          icon: vkIcon,
          title: 'VK',
          link: 'https://vk.com/mashamoroz.photo'
        },
        {
          icon: telegram,
          title: 'Telegram',
          link: 'https://t.me/marvelsan'
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang='sass'>
$url: 'https://res.cloudinary.com/dtecpsig5/image/upload/f_webp/moroz/'
$id: 'b0M8C0y46Ek_kbjoir.jpg'

$fontColor: white

.contactComponent
  width: 100%
  height: 70vh

  background-image: url($url + $id)
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: 150%
  background-position: 100% 55%
  line-height: 1
  @media screen and (max-width: 480px)
    background-size: 350%
    background-position: 43% bottom
    height: calc(100vh - 58px - 81px)

.contactContainer
  width: 100%
  display: flex
  justify-content: center
  height: 100%
  color: $fontColor
  padding: 30px
  background-color: rgba(0, 0, 0, 0.53)
  @media screen and (max-width: 480px)
    background-color: rgba(0, 0, 0, 0.7)

.contactContent
  width: min(1200px, 60%)
  display: flex
  flex-direction: column
  @media screen and (max-width: 480px)
    width: 100%

h2
  margin: 0 auto 20px
  width: fit-content
  font-size: 70px
  @media screen and (max-width: 480px)
    text-align: center

.contactDescription
  font-size: 30px
  text-align: center
  margin-bottom: 30px
  @media screen and (max-width: 480px)
    margin-bottom: 0

.contactLinksContainer
  display: flex
  align-items: center
  flex-direction: column
  margin-top: 50px
  @media screen and (max-width: 480px)
    margin-top: auto
    gap: 20px

.contactLink
  display: flex
  align-items: center
  color: $fontColor
  font-size: 30px
  cursor: pointer
  @media screen and (max-width: 480px)
    font-size: 40px

.contactIcon
  width: 50px
  margin-right: 10px
  filter: invert(1)
  @media screen and (max-width: 480px)
    width: 60px
</style>
