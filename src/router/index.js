import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 组件路由
const Home = () => import('@/views/Home/home')
const Login = () => import('@/views/Login/login')
const Message = () => import('@/views/Message/message')
const Order = () => import('@/views/Order/order')
const Release = () => import('@/views/Release/release')
const MyRelease = () => import('@/views/MyRelease/myrelease')
const Register = () => import('@/views/Register/register')
const UserCenter = () => import('@/views/UserCenter/usercenter')
const GoodsDetail = () => import('@/views/GoodsDetail/goodsdetail')
const PlaceOrder = () => import('@/views/PlaceOrder/placeorder')
const Search = () => import('@/views/Search/search')
const ShopCart = () => import('@/views/shopCart/shopCart')


const routes = [ // 默认首页，无需登录
  {
    path: '/',
    redirect: '/home'
  },
  // 首页
  {
    path: '/home',
    component: Home,
  },
  // 登录
  {
    path: '/login',
    component: Login,
  },
  // 注册
  {
    path: '/register',
    component: Register,
  },
  // 消息
  {
    path: '/message',
    component: Message,
  },
  // 订单
  {
    path: '/order',
    component: Order,
  },
  // 发布
  {
    path: '/release',
    component: Release,
  },
  // 我的发布商品
  {
    path: '/myrelease',
    component: MyRelease,
  },
  // 商品详情
  {
    path: `/goodsdetail/:id`,
    component: GoodsDetail
  },
  //个人中心 
  {
    path: '/usercenter',
    component: UserCenter,
  },
  // 确认订单
  {
    path: '/placeorder',
    component: PlaceOrder,
  },
  //  搜索
  {
    path: '/search/:searchKey',
    component: Search,
  },
  //  购物车
  {
    path: '/shopCart',
    component: ShopCart,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router