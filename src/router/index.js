import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 组件路由
const Home = () => import('@/views/Home/home')
const Login = () => import('@/views/Login/login')
const Message = () => import('@/views/Message/message')
const Order = () => import('@/views/Order/order')
const Release = () => import('@/views/Release/release')
const Goods = () => import('@/views/Goods/goods')
const Register = () => import('@/views/Register/register')
const UserCenter = () => import('@/views/UserCenter/usercenter')


const routes = [ // 默认首页，无需登录
  {
    path: '/',
    redirect: '/home'
  },
  // 首页
  {
    path: '/home',
    component: Home
  },
  // 登录
  {
    path: '/login',
    component: Login
  },
  // 注册
  {
    path: '/register',
    component: Register
  },
  // 消息
  {
    path: '/message',
    component: Message
  },
  // 订单
  {
    path: '/order',
    component: Order
  },
  // 发布
  {
    path: '/release',
    component: Release
  },
  // 商品
  {
    path: '/goods',
    component: Goods
  },
  //个人中心 
  {
    path: '/usercenter',
    component: UserCenter,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router