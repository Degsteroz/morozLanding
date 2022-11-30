<template>
  <div
    class='componentContainer'
    @click='changeModalStateView'
  >
    <div class='imageWrapper' >
      <img
        :src='FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX + image'
        :key='image'
        class='wrapper__image'
      />
      <BaseModal
        v-if='showModal'
        @click='changeModalStateView'
      >
        <img
          class='wrapper__image__fullSize'
          :src='FORMATTED_SCALED900_IMAGE_PREFIX + image'
        />
      </BaseModal>
    </div>
  </div>
</template>

<script>
import { FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX, FORMATTED_SCALED900_IMAGE_PREFIX } from '@/pageData'
import { defineAsyncComponent } from 'vue'
export default {
  name: 'BaseImageCard',
  props: {
    image: {
      required: true,
    }
  },
  components: {
    BaseModal: defineAsyncComponent(() => import('./BaseModal.vue'))
  },
  data() {
    return {
      FORMATTED_SCALED700_LOW_QUALITY_IMAGE_PREFIX,
      FORMATTED_SCALED900_IMAGE_PREFIX,
      showModal: false
    }
  },
  methods: {
    changeModalStateView(e) {
      e.stopPropagation()
      this.showModal = !this.showModal
    }
  }
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
.wrapper__image__fullSize {
  height: calc(100vh - 50px);
}

</style>
