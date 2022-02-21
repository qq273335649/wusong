/*
 * @Author: your name
 * @Date: 2021-12-22 19:30:00
 * @LastEditTime: 2022-02-21 11:05:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-appvue3\src\main.ts
 */
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
// import './styles/element/index.scss'
import './global.less'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import { instance } from './request'
createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .use(VueAxios, instance)
    .mount('#app');
