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
          name:'zhangsan',
          imgUrl:'',
          count:1,
          singlePrice:26.99
        },
        {
          id:21920,
          name:'zhangsan',
          imgUrl:'',
          count:1,
          singlePrice:26.99
        },
        {
          id:21930,
          name:'zhangsan',
          imgUrl:'',
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
