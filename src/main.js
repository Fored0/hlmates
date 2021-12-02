import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 清除浏览器默认样式
import 'assets/css/reset.css'

// 网络请求
// import MyHttpServer from './network/http'

Vue.use(ElementUI)
// Vue.use(MyHttpServer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
