// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import'./assets/css/bootstrap/dist/css/bootstrap.min.css'
import'./assets/css/custom.css'
import './assets/js/jquery.min.js'
import'./assets/css/bootstrap/dist/js/bootstrap.min.js'
import'./assets/js/sidebar-nav.min.js'
import'./assets/js/jquery.slimscroll.js'
import'./assets/js/custom.js'
import './assets/css/index.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
