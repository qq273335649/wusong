/*
 * @Author: your name
 * @Date: 2022-02-22 16:40:42
 * @LastEditTime: 2022-02-22 16:58:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ws-appvue3\src\router\admin.ts
 */
import AdminLayout from '@/layout/AdminLayout.vue';
import AdminSort from '@/views/admin/sort/index.vue';
import { RouteRecordRaw } from 'vue-router';
const adminrouters: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        name: 'Admin',
        component: AdminLayout,
        redirect: '/admin/sort',
        children: [
            {
                path: '/admin/sort',
                name: 'Admin-Sort',
                component: AdminSort
            },
            {
                path: '/admin/span',
                name: 'Admin-Span',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '@/views/admin/span/index.vue')
            }
        ]
    },
];
export {
    adminrouters
}