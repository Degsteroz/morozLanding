<template>
  <RouterLink
    class='albumDirectoryContainer'
    :to='albumUrl'
  >
    <div class='directory__descriptionContainer'>
      <h3>
        {{albumName}}
      </h3>
      <p>
        {{albumDescription}}
      </p>
    </div>
    <BaseImage
      class='directory__image'
      :image='albumCover'
    />
  </RouterLink>
</template>
<script>
import BaseImage from './BaseImage.vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'BaseAlbumsDirectory',
  components: {
    BaseImage,
    RouterLink
  },
  props: {
    directory: {
      type: Object,
      required: true,
    }
  },
  computed: {
    albumName () {
      return this.$props.directory.name
    },
    albumDescription () {
      return this.$props.directory.description
    },
    albumUrl () {
      return '/directory/' + this.$props.directory.id
    },
    albumCover () {
      return this.$props.directory.cover
    }
  }
}
</script>

<style scoped>
.albumDirectoryContainer {
  display: flex;
  width: 400px;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.directory__descriptionContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  color: black;
  padding: 0 20px;

  background: rgba(255, 255, 255, 0.7);
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 40px;
}
.directory__descriptionContainer:hover {
  opacity: 1;
}
.directory__descriptionContainer:hover + .directory__image {
  transform: scale(1.5);
}

p,
h3 {
  margin: 0;
  line-height: 1;
}

h3 {
  font-size: 80px;
}

.directory__image {
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}

@media screen and (max-width: 480px) {
  .albumDirectoryContainer {
    width: 100%;
  }
  .directory__descriptionContainer {
    opacity: 0.7;
  }
}
</style>
