import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopCart: {
      id: 2910,
      data: [{
          id: 2190,
          name: '水星记',
          imgUrl: 'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count: 1,
          singlePrice: 26.99
        },
        {
          id: 21920,
          name: 'zhangsan',
          imgUrl: 'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count: 1,
          singlePrice: 26.99
        },
        {
          id: 21930,
          name: 'zhangsan',
          imgUrl: 'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count: 1,
          singlePrice: 26.99
        },
        {
          id: 219302,
          name: 'zhangsan',
          imgUrl: 'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count: 1,
          singlePrice: 26.99
        },
        {
          id: 219310,
          name: 'zhangsan',
          imgUrl: 'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count: 1,
          singlePrice: 26.99
        },
        {
          id: 219230,
          name: 'zhangsan',
          imgUrl: 'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count: 1,
          singlePrice: 26.99
        },
        {
          id: 2191230,
          name: 'zhangsan',
          imgUrl: 'https://picasso.alicdn.com/imgextra/O1CNA1LMjIjM1y0NVsmudEc_!!4218606516-0-psf.jpg_430x430q90.jpg',
          count: 1,
          singlePrice: 26.99
        },
      ]
    },
    messageInfo: {
      userImg: 'https://img0.baidu.com/it/u=4060770951,4069855872&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      userName: '江玉燕',
      school: '四川大学锦江学院',
      total: 7,
      comments: [{
          id: 1,
          commentUser: 'zhansgan',
          commentUserImg: 'https://img2.baidu.com/it/u=1071507123,4013803160&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200',
          commentUserSchool: '成都大学',
          commentContext: '床前明月光，疑是地上霜，举头望明月，低头思故乡。'
        }, {
          id: 2,
          commentUser: 'lisi',
          commentUserImg: 'https://img2.baidu.com/it/u=3973855039,4170930478&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
          commentUserSchool: '四川大学',
          commentContext: '江上往来人，但爱鲈鱼美。 君看一叶舟，出没风波里。'
        }, {
          id: 3,
          commentUser: 'user1',
          commentUserImg: 'https://img1.baidu.com/it/u=1434533787,33664708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          commentUserSchool: '上海戏剧学院',
          commentContext: '墙角数枝梅，凌寒独自开。 遥知不是雪，为有暗香来。'
        }, {
          id: 4,
          commentUser: 'testUser',
          commentUserImg: 'https://img2.baidu.com/it/u=3990732507,3148015412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          commentUserSchool: '浙江大学',
          commentContext: '春阴垂野草青青， 时有幽花一树明。晚泊孤舟古祠下，满川风雨看潮生。'
        }, {
          id: 5,
          commentUser: 'user22',
          commentUserImg: 'https://img1.baidu.com/it/u=671076267,3648872689&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          commentUserSchool: '国防科技大学',
          commentContext: '春风又绿江南岸，明月何时照我还？'
        }, {
          id: 6,
          commentUser: 'user44',
          commentUserImg: 'https://img0.baidu.com/it/u=927687568,3263174386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          commentUserSchool: '黄埔军校',
          commentContext: '一年好景君须记，正是橙黄橘绿时。'
        }, {
          id: 7,
          commentUser: 'user66',
          commentUserImg: 'https://img0.baidu.com/it/u=2314600222,1003014148&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          commentUserSchool: '云南大学',
          commentContext: '时人不识余心乐，将谓偷闲学少年。'
        },

      ]
    }
  },
  mutations: {
    pushData(params) {
      this.state.shopCart.data.push({
        name: 'lisi',
        id: 222
      })
    }
  },
  actions: {},
  modules: {}
})