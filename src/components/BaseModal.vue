<template>
  <div class='baseModal__container'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseModal',
}
</script>

<style lang='sass'>
  .baseModal__container
    position: fixed
    top: 0
    left: 0
    z-index: 20

    width: 100vw
    height: 100vh
    background-color: rgba(255, 255, 255, 0.37)

    display: flex
    justify-content: center
    align-items: center

</style>
