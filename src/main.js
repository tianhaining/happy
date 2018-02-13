// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MiaozhenUI from 'miaozhen-ui';//miaozhen-ui是我发布的组件库，地址：https://www.npmjs.com/package/miaozhen-ui
import 'miaozhen-ui/dist/static/css/app.css';
Vue.use(MiaozhenUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
