// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入 element-ui
import ElementUI from 'element-ui';
//引入 element-ui 的样式
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
//引入 axios
import myaxios from './assets/js/myaxios.js'
//调用方法 vue
Vue.use(myaxios);

//引入全局样式
import './assets/css/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
