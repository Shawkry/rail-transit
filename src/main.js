import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import SocketService from './utils/socket_service'
import './assets/font/iconfont.css'
import './assets/css/jlobal.less'
import 'assets/theme/vintage'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "lib-flexible-computer";
import axios from "axios"
 import * as  echarts from 'echarts';
import  'echarts-gl'
// Vue.prototype.$echartsGL = echartsGL
import $ from 'jquery'
import './assets/font/font.css'
Vue.prototype.$http=axios
Vue.use(ElementUI);
SocketService.Instance.connect()
// axios.defaults.baseURL = 'http://localhost:8888/api/'
Vue.prototype.$socket = SocketService.Instance
// Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
