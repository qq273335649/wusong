/*
 * @Author: your name
 * @Date: 2021-12-22 19:30:00
 * @LastEditTime: 2022-02-23 10:11:05
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
import { getToken } from './utils'

router.beforeEach((to, from, next) => {
    const isLoginToken = getToken();//获取缓存中token
    if (isLoginToken) {
        next();
        store.commit("incToken", isLoginToken);//缓存中拿到的token赋值到store中
    } else {
        if (to.path !== '/home') {
            if (to.meta.requireAuth) {//需要登录权限
                next('/home');//返回主页
            }
        }
        //清除store中token
        store.commit('clearToken');
        next();
    }
})

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .use(VueAxios, instance)
    .mount('#app');
