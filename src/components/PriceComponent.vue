<template>
  <div class='priceComponent'>
    <div id='price' class='navigationAnker' />
    <div class='priceContainer'>
      <h1 class='price__title'>Мой прайс</h1>

      <div class='price__descriptionContainer'>
        <div class='price__firstParagraph'>
          {{firstParagraph}}
        </div>

        <div class='price__secondParagraph'>
          <div
            class='price__secondParagraph__element'
            v-for='element in prices'
            :key='element'
          >
            {{element}}
          </div>
        </div>

        <div class='price__thirdParagraph'>
          {{thirdParagraph}}
        </div>

        <div class='price__subtitle'>
          {{priceSubtitle}}
        </div>

        <div class='price__resultParagraph'>
          <div
            v-for='(result, index) in results'
            class='resultDescription'
            :key='results + index'
          >
            <span>{{result}}</span>
          </div>
        </div>

        <div class='price__licence'>
          {{licence}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceComponent',
  data() {
    return {
      firstParagraph: 'Я провожу индивидуальные съемки, luv story, ' +
        'девичники, также вы можете заказать у меня контент-съемку ' +
        'или пригласить поснимать репортаж.',
      prices: [
        'Стоимость моей съемки 4000₽, снимаем от часа до двух, ' +
        'я берегу ваше и свое время, поэтому для брони обязательно ' +
        'внесение предоплаты 50%',
        'Репортажная съемка 2000₽/час, количество рабочих часов ' +
        'обговаривается заранее'
      ],
      thirdParagraph: '*студия или дорога до места, если съемка ' +
        'выездная, оплачивается отдельно',
      priceSubtitle: 'Что входит в съемку?',
      results: [
        'Обсуждение и совместное рождение идеи съемки',
        'Помощь в сборе образа, подборе реквизита и поиске локации',
        'В процессе съемки я помогу вам настроиться, проблем с позированием не будет',
        '60-200 фотографий в авторской цветокоррекции',
      ],
      licence: 'соглашаясь на съемку, вы соглашаетесь на публикацию ' +
        'своих фотографий в моем портфолио, если вы не хотите, чтобы ' +
        'я публиковала ваши фото, то это обговаривается заблаговременно'
    }
  }
}
</script>

<style scoped lang='sass'>
$border: 1px solid rgba(255, 255, 255, 0.15)

.priceComponent
  width: 100%
  padding: 10px 0
  display: flex
  align-items: center
  justify-content: center
  color: #ffffff
  height: auto
  line-height: 1.2
  @media screen and (max-width: 480px)
    line-height: 1
    background-color: unset

.priceContainer
  width: min(1440px, 90%)
  display: flex
  flex-direction: column
  align-items: center
  @media screen and (max-width: 480px)
    width: 100%

.price__title
  font-size: 70px
  @media screen and (max-width: 480px)
    margin-bottom: 10px

.price__descriptionContainer
  border: 1px solid var(--white)
  flex: 1 1 50%
  border-radius: 10px
  border: $border
  font-size: 30px
  padding: 40px
  text-align: center
  background-color: rgba(0, 0, 0, 0.65)
  @media screen and (max-width: 480px)
    font-size: 24px
    border: none
    padding: 20px 10px

.price__firstParagraph
  margin-bottom: 20px
  @media screen and (max-width: 480px)
    margin-bottom: 10px

.price__secondParagraph
  padding: 10px
  display: flex
  flex-direction: row
  justify-content: space-around
  @media screen and (max-width: 480px)
    font-size: 18px

.price__secondParagraph__element
  display: flex
  flex: 0 0 40%
  border: $border
  border-radius: 10px
  padding: 10px
  align-items: center

.price__thirdParagraph
  font-size: 20px
  margin-bottom: 30px
  @media screen and (max-width: 480px)
    font-size: 18px
    margin-bottom: 10px

.price__subtitle
  font-style: italic
  margin-bottom: 10px

.price__resultParagraph
  display: flex
  flex-wrap: wrap
  gap: 10px
  margin-bottom: 30px

.resultDescription
  display: flex
  flex: 1 1 40%
  border: $border
  border-radius: 10px
  justify-content: center
  align-items: center

.price__licence
  font-style: italic
  font-size: 20px

.navigationAnker
  position: absolute
  top: -58px
</style>
