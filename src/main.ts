import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@assets/style/index.css'

import { configure } from 'vee-validate'

import App from './App.vue'
import { router } from './router'

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: false
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
