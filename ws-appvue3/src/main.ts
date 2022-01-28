import { createApp } from 'vue'
import 'element-plus/dist/index.css'
// import './styles/element/index.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
