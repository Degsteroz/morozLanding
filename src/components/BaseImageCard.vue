<template>
  <div class='componentContainer' :data-left='left'>
    <a class='imageWrapper' :href='albumUrl' target='_blank'>
      <img :src='url' :key='url' class='wrapper__image'/>
    </a>
  </div>
</template>

<script>
import profilePic from '@img/profileImg.jpeg'
export default {
  name: 'BaseImageCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    urls: {
      type: Array[String],
      required: true,
    },
    url: {
      type: ImageData,
      required: true,
    },
    albumUrl: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      profileImgUrl: profilePic,
      profileName: 'muamarvel',
      instagramUrl: 'https://www.instagram.com/muamarvel/'
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
   flex-basis: 500px;
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
  height: 500px;
  position: relative;
}
.wrapper__image {
  height: 500px;
  filter: grayscale(1);
  transition: all 1s ease-in-out;
}

</style>
