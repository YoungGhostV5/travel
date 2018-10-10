// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 绝对import在相对的import之前
import Vue from 'vue'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

// 路由就是根据网址的不同，返回不同的内容给用户
