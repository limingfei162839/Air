import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fontawesome from 'font-awesome/css/font-awesome.min.css'

import Login from '@/components/public/login' //登录

import Container from '@/components/public/container' //架构容器
import Banner from '@/components/view/banner' //首页
import Exchange from '@/components/view/exchange' //技术杂谈
import Message from '@/components/view/message' //给我留言

import MIndex from '@/components/modules/m_index' //后台管理首页
import MExchange from '@/components/modules/m_exchange' //后台技术类添加
import MUser from '@/components/modules/m_user' //后台用户管理
Vue.use(Router);
Vue.use(ElementUI);
Vue.use(Fontawesome);
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Container',
            name: 'Container',
            component: Container,
            children: [{
                    path: '/',
                    redirect: 'Banner'
                },
                {
                    path: '/Banner',
                    name: 'Banner',
                    component: Banner
                },
                {
                    path: '/Exchange',
                    name: 'Exchange',
                    component: Exchange
                },
                {
                    path: '/Message',
                    name: 'Message',
                    component: Message
                },

            ],
        },
        {
            path: '/MIndex',
            name: 'MIndex',
            component: MIndex,
            children: [{
                    path: '/',
                    component: MExchange
                },
                {
                    path: '/MUser',
                    component: MUser
                },
                {
                    path: '/MExchange',
                    component: MExchange
                }
            ]
        },
    ]
})