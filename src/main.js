import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import addIcons from '@/utils/icons'
import ElementPlus from 'element-plus'

addIcons(library)

import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.component('FAI', FontAwesomeIcon)
app.use(router)

app.mount('#app')
