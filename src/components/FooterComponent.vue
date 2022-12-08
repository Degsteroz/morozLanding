<template>
  <div class='footerContainer'>
    <div>Все права на изображения и текст принадлежат М. Мороз</div>
    <div>2022г.</div>
    <a
      href='http://degsteroz.space'
      target='_blank'
    >
      Powered by: Degster0z
    </a>
  </div>
</template>

<style lang='sass'>
.footerContainer
  background-color: var(--darkBlue)
  color: #cec8c8
  display: flex
  align-items: center
  flex-direction: column
  line-height: 1
  padding: 4px 0
  font-size: 20px
  @media screen and (max-width: 480px)
    padding: 8px 0
    font-size: 20px
a
  color: white
  margin-top: 5px
  font-weight: bold

</style>
