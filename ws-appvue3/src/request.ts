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
import { h } from 'vue';
import { getToken } from './utils';

const instance = axios.create({
    baseURL: '/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Authorization': 'Bearer ' + getToken(),//添加token权限标识
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
    console.log(response);
    console.log("response");
    //添加401权限验证
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
    // 对响应错误做点什么
    return Promise.reject(error);
});

export {
    instance,
};