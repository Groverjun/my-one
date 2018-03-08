import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Choice from '@/components/Choice'
import preview from '@/components/preview'
import operation from '@/components/Template/model1/operation'
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
    }
  ]
})
