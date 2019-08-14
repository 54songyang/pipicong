// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import qs from 'qs'
import store from './store';
import Vuex from 'vuex'
import 'lib-flexible/flexible'
import 'swiper/dist/css/swiper.css'; //swiper
import utils from '@/assets/js/utils.js';  //公共方法js
import cutOff from './components/cutOff/cutOff.vue' //自定义分割线组件
import border from './components/border/border.vue' //自定义border
import Cube from 'cube-ui' //cubeUi
import { toast, confirmDialog} from './assets/js/message-box' //简易消息弹窗及提示
import filters from './assets/js/filters';

//使用插件
Vue.use(Cube)
Vue.use(Vuex);

//将方法嵌入vue原型
Vue.prototype.$utils = utils;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$toast = toast
Vue.prototype.$confirmDialog = confirmDialog;

//全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//引入自定义全局组件
Vue.component('cutOff',cutOff)
Vue.component('border',border)

Vue.config.productionTip = false;

//配置axios默认
axios.defaults.baseURL = BASE_URL;
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;//配置token,看情况使用
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//配置请求头信息。
axios.defaults.timeout = 5000; // 超时时间
axios.defaults.transformRequest = [
  function (data) {
    return qs.stringify(data);
  }
];

console.log('%c 当前环境 : '+ process.env.NODE_ENV  , 'color:#0062f5;-webkit-background-clip: text;font-size:15px;');
var BASE_URL, INSURE_URL, PLAN_URL, PDF_URL, PAY_URL, HTML;
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'https://www.easy-mock.com/mock/5b1a305c98c31e30a66e3995/hwp-admin/updatePassword';
    break;
  case 'production':
    // BASE_URL = '';
    break;
  default:
    // BASE_URL = '';
    break;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
