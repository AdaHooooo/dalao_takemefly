
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/reset.scss'

import App from './App.vue'
import router from './router'

//引入全局组件：顶部栏
import DaLaoTop from '@/components/top/index.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('DaLaoTop',DaLaoTop)
app.mount('#app')
