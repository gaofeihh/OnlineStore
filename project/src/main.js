import Vue from 'vue'
import App from './App.vue'
import router from "./router"

import './assets/css/reset.css'

//让common的组件成为全局的组件
//使用components里的index.js文件
import "./components/common/index"

//使用轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/css/swiper.css'//改文件再下载vue-awesome-swiper能在node_module里找到


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
