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

// 模拟,需要将js值转换为JSON字符串进行缓存
const userInfo = {
  nickName:'大爱仙尊源源',
  imgUrl:'https://i0.hdslb.com/bfs/face/7db8bd25ff36ba20e8cc06be528fd99ae5de4e52.jpg@240w_240h_1c_1s.webp'
}

localStorage.setItem('userInfo',JSON.stringify(userInfo))

Vue.use(ElementUI)
// Vue.use(MyHttpServer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
