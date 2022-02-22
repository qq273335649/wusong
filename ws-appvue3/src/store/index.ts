/*
 * @Author: your name
 * @Date: 2021-12-22 19:30:00
 * @LastEditTime: 2022-02-22 10:37:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE,
 * @FilePath: \ws-appvue3\src\store\index.ts
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    token: '',
  },
  mutations: {
    incToken(state, token) {
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
