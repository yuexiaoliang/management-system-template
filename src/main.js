import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import App from './app.vue'
import router from './router'

import 'reset.css'
import 'nprogress/nprogress.css'
import './styles/variables.css'
import './styles/base.scss'

const app = createApp(App)

app.use(createPinia())

app.use(ArcoVueIcon)
app.use(router)

app.mount('#app')
