import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopCart:{
      id:2910,
      data:[
        {
          id:2190,
          name:'水星记',
          imgUrl:'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count:1,
          singlePrice:26.99
        },
        {
          id:21920,
          name:'zhangsan',
          imgUrl:'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count:1,
          singlePrice:26.99
        },
        {
          id:21930,
          name:'zhangsan',
          imgUrl:'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count:1,
          singlePrice:26.99
        },
        {
          id:219302,
          name:'zhangsan',
          imgUrl:'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count:1,
          singlePrice:26.99
        },
        {
          id:219310,
          name:'zhangsan',
          imgUrl:'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count:1,
          singlePrice:26.99
        },
        {
          id:219230,
          name:'zhangsan',
          imgUrl:'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count:1,
          singlePrice:26.99
        },
        {
          id:2191230,
          name:'zhangsan',
          imgUrl:'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count:1,
          singlePrice:26.99
        },
      ]
    }
  },
  mutations: {
    pushData(params){
      this.state.shopCart.data.push({name:'lisi',id:222})
    }
  },
  actions: {
  },
  modules: {
  }
})
