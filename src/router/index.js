import Vue from 'vue'
import Router from 'vue-router'

//引入 userElement 组件
import UserElement from '../components/useElement.vue'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //当请求根目录 重定向到 /home 中
    // { path: '/', redirect: '/home' }, // 重定向
    { path: '/', redirect: { name: 'home' } }, // 重定向的目标也可以是一个命名的路由
    { path: '/userelement', component: UserElement }, // 使用element-ui的路由
    { path: '/login', name: 'login', component: Login }, // 登录的路由
    { path: '/home', name: 'home', component: Home }
  ]
})
