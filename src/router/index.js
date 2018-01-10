import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fontawesome from 'font-awesome/css/font-awesome.min.css'

import Container from '@/components/public/container' //架构容器
import Banner from '@/components/view/banner' //首页
import Exchange from '@/components/view/exchange' //技术杂谈
import Message from '@/components/view/message' //给我留言
Vue.use(Router);
Vue.use(ElementUI);
Vue.use(Fontawesome);
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Container',
        component: Container,
        children: [{
                path: '/',
                redirect: 'Banner',
            },
            {
                path: '/Banner',
                name: 'Banner',
                component: Banner,
            },
            {
                path: '/Exchange',
                name: 'Exchange',
                component: Exchange,
            },
            {
                path: '/Message',
                name: 'Message',
                component: Message,
            },
        ]
    }]
})