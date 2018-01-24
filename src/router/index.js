import Vue from 'vue'
import Router from 'vue-router'  //引入路由
import VueResource from 'vue-resource' //引入resource
import Home from '../components/Home' //引入home组件
import HelloWorld from '@/components/HelloWorld'//引入helloworld组件
import Page from '@/components/Page'//引入helloworld组件
import AddUser from '@/components/AddUser'//引入AddUser组件

Vue.use(Router) //使用路由
Vue.use(VueResource) //使用vueresource
//配置路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    }
  ],
  //打包的时候要注释掉，不然会被坑，开发的时候需要打开.
  mode:"history"  //这个是解决浏览器   http://localhost:8080/#/中‘#/’这个问题的
  
})
