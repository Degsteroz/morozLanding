import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'

import router from '@/router'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)
app
  .use(VueLazyLoad, {
    loading: '',
    error: '',
    lifecycle: {}
  })
  .use(router)
  .mount('#app')
