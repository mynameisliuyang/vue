// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.prototype.$axios = axios
//import User from './components/User' //全局引入组件

Vue.config.productionTip = false



//Vue.component('user',User)  //注册全局组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //使用路由
  template: '<App/>',
  components: { App }
})
