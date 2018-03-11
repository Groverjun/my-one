import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Choice from '@/components/Choice'
import preview from '@/components/preview'
import details from '@/components/details'
import swiper from '@/components/swiper'
import operation from '@/components/Template/model1/operation'
import operation2 from '@/components/Template/model2/operation'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Choice',
      name: 'Choice',
      component: Choice
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview
    },
    {
      path: '/operation',
      name: 'operation',
      component: operation
    },
    {
      path: '/operation2',
      name: 'operation2',
      component: operation2
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
  ]
})
