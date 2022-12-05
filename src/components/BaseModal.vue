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
    background-color: rgba(255, 255, 255, 0.9)

    display: flex
    justify-content: center
    align-items: center
    animation: appear 0.3s ease-in-out

  @keyframes appear
    0%
      transform: scale(0.95)
      opacity: 0

    100%
      transform: scale(1)
      opacity: 1
</style>
