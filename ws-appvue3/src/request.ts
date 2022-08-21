/*
 * @Author: your name
 * @Date: 2022-02-21 10:44:52
 * @LastEditTime: 2022-02-21 15:31:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue\ws-appvue3\src\request.ts
 */
import axios from 'axios';
import { ElMessage, ElNotification } from 'element-plus';
import message from 'element-plus/es/components/message';
import { h } from 'vue';
import _ from 'lodash'
import store from './store';
import { getToken } from './utils';
// 异常退出
const logout = _.throttle(
    () => {
        message.error('登录已失效、请重新登录。');
        // eslint-disable-next-line no-underscore-dangle
        // getDvaApp()._store.dispatch({
        //     type: 'authModel/logout',
        // });
        store.commit('clearToken');
    },
    1000,
    { leading: true, trailing: false },
);
const instance = axios.create({
    baseURL: '/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Authorization': "Bearer " + getToken(),//jwt默认验证token传递
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 在发送请求之前做些什么
    if (response.data.success === false) {
        ElMessage({
            showClose: true,
            message: response.data.msg || 'Warning',
            type: 'warning',
        })
    }
    if (response.data.code === 500) {
        ElNotification({
            title: 'Title',
            message: h('i', { style: 'color: teal' }, 'This is a reminder'),
        })
    }
    return response;
}, function (error) {
    console.error(error, 'error');
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 返回 401 清除token信息并跳转到登录页面
                logout();
        }
    }
    // 对响应错误做点什么
    return Promise.reject(error);
});

export {
    instance,
};