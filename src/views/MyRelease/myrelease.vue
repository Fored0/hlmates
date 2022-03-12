<template>
  <div>
    <tab-bar></tab-bar>
    <!--  -->
    <div class="title">
      我的发布
    </div>
    <!--  -->
    <div class="card">
      <div class="goods_item" v-for="(item,id) in goods" :key="id">
        <img src="https://img0.baidu.com/it/u=3122136587,3938996930&fm=26&fmt=auto" alt="">
        <div class="desc">
          <p>{{item.name}}</p>
          <ul>
            <li>{{'浏览:'+item.liulan}}</li>
            <li>{{'想要:'+item.xiangyao}}</li>
          </ul>
        </div>
        <!-- button -->
        <div class="btn">
          <button @click="dePrice()">降价</button>
          <button>下架</button>
          <button>编辑</button>
          <button>放入货架</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar";
export default {
  components: {
    TabBar,
  },
  data(){
    return{
      goods:[
        {
          name:'任天堂 Nintendo Switch',
          liulan:'25',
          xiangyao:'34'
        },{
          name:'任天堂 Nintendo Switch',
          liulan:'333',
          xiangyao:'333'
        },{
          name:'任天堂 Nintendo Switch',
          liulan:'233',
          xiangyao:'545'
        },
        {
          name:'任天堂 Nintendo Switch',
          liulan:'121',
          xiangyao:'232'
        },
      ]
    }
  },
  methods:{
    dePrice(){
      console.log('dePrice');
    }
  }
};
</script>

<style scoped>
  .title{
    margin-left: 15%;
    margin-top: 2%;
    font-size: 20px;
    text-align: center;
    font-family: 宋体;
    width: 120px;
    height: 30px;
    font-weight: bold;
    color: yellow;
    background-color: rgb(43, 40, 40);
  }
  .card{
    width: 70%;
    margin-left: 15%;
    margin-top: 1%;
    height: 550px;
    border: 1px solid rgb(197, 188, 188);
    box-shadow: 1px 1px 2px bisque;
    border-radius: 10px;
  }
  .goods_item{
    width: 94%;
    height: 110px;
    background-color:rgb(245, 245, 245);
    margin-left: 3%;
    margin-top: 2%;
    border-radius: 10px;
  }
  .goods_item img{
    width: 90px;
    height: 90px;
    margin-top: 10px;
    border-radius: 10px;
    margin-left: 2%;
  }
  .goods_item .desc{
    margin-left: 17%;
    margin-top: -7.5%;
  }
  .desc p{
    font-size: 15px;
  }
  .desc ul{
    display: flex;
    margin-top: 3%;
    width: 15%;
  }
  .desc ul li{
    flex: 1;
  }
  .btn{
    margin-left: 50%;
    margin-top: -2%;
    width: 50%;
  }
  .btn button{
    width: 15%;
    height: 30px;
    margin-left: 8%;
    border: 1px solid transparent;
    background-color: rgb(231, 226, 226);
    outline: none;
    border-radius: 5px;
  }
</style>