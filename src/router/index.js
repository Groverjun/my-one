import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Choice from '@/components/Choice'
import preview1 from '@/components/preview1'
import preview2 from '@/components/preview2'
import details from '@/components/details'
import operation1 from '@/components/Template/model1/operation'
import operation2 from '@/components/Template/model2/operation'
import operation2Middle from '@/components/Template/model1/operationMiddle'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'home',
      params: { 
                name: 'name', 
                dataObj: 1
            },
      component: home
    },
    {
      path: '/home',
      name: 'home',
       params: { 
                name: 'name', 
                dataObj: 1
            },
      component: home
    },
    {
      path: '/Choice',
      name: 'Choice',
      component: Choice
    },
    {
      path: '/preview1',
      name: 'preview1',
      component: preview1
    },
    {
      path: '/preview2',
      name: 'preview2',
      component: preview2
    },
    {
      path: '/operation1',
      name: 'operation1',
      component: operation1
    },
    {
      path: '/operation2',
      name: 'operation2',
      component: operation2
    },
    {
      path: '/operation2Middle',
      name: 'operation2Middle',
      component: operation2Middle
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
  ]
})
