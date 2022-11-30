import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)
app.use(VueLazyLoad, {
  loading: '',
  error: '',
  lifecycle: {}
})
app.mount('#app')
