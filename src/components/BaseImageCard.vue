<template>
  <div class='componentContainer' :data-left='left'>
    <div class='imageWrapper' >
      <img :src='image' :key='image' class='wrapper__image'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseImageCard',
  props: {
    image: {
      required: true,
    }
  },
}
</script>

<style lang='scss'>
.componentContainer {
  display: flex;
  flex: 1 1 150px ;
  flex-direction: column;
  overflow: hidden;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  transition: all 1s ease-in-out;
  &:hover {
   flex-basis: 400px;
    .wrapper__image {
      filter: none;
    }
  }
}
.imageWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 400px;
  position: relative;
}
.wrapper__image {
  height: 400px;
  filter: grayscale(1);
  transition: filter 1s ease-in-out, opacity 0.4s ease-in-out;
}

</style>
