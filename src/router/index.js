import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/aboutproduct'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
            path: '/aboutproduct',
            component: resolve => require(['../components/pages/aboutproduct.vue'], resolve),
            meta: { title: '产品洞察' }
        },
        {
            path: '/tendency',
            component: resolve => require(['../components/pages/tendency.vue'], resolve),
            meta: { title: '行业趋势' }
        },
        {
            path: '/material',
            component: resolve => require(['../components/pages/material.vue'], resolve),
            meta: { title: '原料洞察' }
        },
        {
            path: '/sample',
            component: resolve => require(['../components/pages/sample.vue'], resolve),
            meta: { title: '试样预估' }
        },
        {
            path: '/myReport',
            component: resolve => require(['../components/pages/myReport.vue'], resolve),
            meta: { title: '我的报告' }
        }
        
      ]
    },
    {
        path: '/login',
        component: resolve => require(['../components/pages/login.vue'], resolve),
        meta: { title: '登录' }
    },

  ]
})
