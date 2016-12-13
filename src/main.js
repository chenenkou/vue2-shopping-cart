// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import store from './store'
import App from './App'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  template: '<App/>',
  components: { App }
})
