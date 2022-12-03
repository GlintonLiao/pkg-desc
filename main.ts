import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import { install } from './composables/i18n'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
install(app)
app.use(router)
app.use(head)
app.mount('#app')
