<template>
  <div class='componentContainer' :data-left='left'>
    <div class='wrapperEdge'>
      <img :src='profileImgUrl' class='wrapperEdge__image'/>
      <span>{{profileName}}</span>
    </div>
    <a class='imageWrapper' :href='albumUrl' target='_blank'>
      <div class='wrapperScrollContainer' :data-left='left'>
        <img :src='url' v-for='url in urls' :key='url'/>
      </div>
    </a>
    <div class='wrapperEdge --bottom'>
      {{profileName}}: {{title}}
    </div>
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
  computed: {
    left() {
      return (`${(this.urls.length - 1) * (-300)}px`)
    }
  }
}
</script>

<style lang='scss'>
.componentContainer {
  display: flex;
  flex: 0 0 auto ;
  width: 300px;
  flex-direction: column;
  overflow: hidden;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
.wrapperEdge {
  display: flex;
  height: 40px;
  background-color: #f2f2f2;
  border-radius: 20px 20px 0 0;
  align-items: center;
  padding: 0 10px;
  &.--bottom {
    border-radius: 0 0 8px 8px;
  }
}
.wrapperEdge__image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
}
.imageWrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 200px;
  position: relative;
}
.wrapperScrollContainer {
  display: flex;
  position: absolute;
  left: 0;
  transition: all 3s ease-in-out;
  transition-delay: 0.5s;
  img {
    transition: filter 0.6s ease-in-out;
    width: 300px;
    filter: grayscale(1);
  }
}
.componentContainer:hover .wrapperScrollContainer img {
  filter: grayscale(0);
}
.componentContainer:hover .wrapperScrollContainer {
  left: -300px;
}

</style>
