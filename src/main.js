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


// 模拟,需要将js值转换为JSON字符串进行缓存
const userInfo = {
  nickName:'大爱仙尊源源',
  imgUrl:'https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500',
  phoneNumber:'18281564080'
}

localStorage.setItem('userInfo',JSON.stringify(userInfo))

Vue.use(ElementUI)
// Vue.use(MyHttpServer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
