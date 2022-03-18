<template>
  <!-- 登陆后首页 -->
  <div class="home">
    <tab-bar></tab-bar>
    <div class="input">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-button class="btn" icon="el-icon-search"></el-button>
      <div class="recommend">
        <ul>
          <li>为您推荐:</li>
          <li v-for="(item, index) in homeData.recommend " :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="show_goods">
      <!-- 好物推荐 -->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="left">{{ homeData.goodThingRecommend.itemName }}</div>
          <div class="right">换一批</div>
        </div>
        <div class="goods_item">
          <ul v-for="(item, index) in homeData.goodThingRecommend.items " @click="toGoodsDetail(item.id)" :key="index">
            <li>
              <img :src="item.url" alt />
              <div class="goods_scp">{{ item.description }}</div>
              <div class="goods_price">￥{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 数码产品 -->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="left">{{ homeData.digital.itemName }}</div>
          <div class="right">换一批</div>
        </div>
        <div class="goods_item">
          <ul v-for="(item, index) in homeData.goodThingRecommend.items " @click="toGoodsDetail(item.id)" :key="index">
            <li>
              <img :src="item.url" alt />
              <div class="goods_scp">{{ item.description }}</div>
              <div class="goods_price">￥{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 鞋服化妆品 -->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="left">{{ homeData.clothes.itemName }}</div>
          <div class="right">换一批</div>
        </div>
        <div class="goods_item">
          <ul v-for="(item, index) in homeData.goodThingRecommend.items " @click="toGoodsDetail(item.id)" :key="index">
            <li>
              <img :src="item.url" alt />
              <div class="goods_scp">{{ item.description }}</div>
              <div class="goods_price">￥{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 书籍 -->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="left">{{ homeData.book.itemName }}</div>
          <div class="right">换一批</div>
        </div>
        <div class="goods_item">
          <ul v-for="(item, index) in homeData.book.items " @click="toGoodsDetail(item.id)" :key="index">
            <li>
              <img :src="item.url" alt />
              <div class="goods_scp">{{ item.description }}</div>
              <div class="goods_price">￥{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 宿舍小物件 -->
    </div>
    <bottom-bar></bottom-bar>
  </div>
  <!-- 未登录首页 -->
</template>
<script>
import TabBar from "components/tabbar/tabbar.vue";
import BottomBar from "components/bottombar/bottombar.vue";
import homeData from './mockData'
export default {
  components: {
    TabBar,
    BottomBar
  },
  data() {
    return {
      input: "",
      homeData,
    };
  },
  methods:{
    toGoodsDetail(id){
      this.$router.push(`/goodsdetail/${id}`)
    }
  }
};
</script>

<style scoped>
.input {
  width: 30%;
  margin-left: 35%;
  margin-top: 20px;
  overflow: hidden;
}
.btn {
  position: absolute;
  left: 65%;
}
.input .recommend ul {
  display: flex;
  margin-top: 15px;
}
.input .recommend ul li {
  flex: 1;
  font-size: 15px;
  color: #000000;
}
/*  */
.goods_rec {
  width: 70%;
  margin-left: 15%;
  border: 1px solid rgb(177, 152, 141);
  margin-top: 20px;
  border-radius: 20px;
}
.goods_title {
  width: 100%;
  height: 40px;
  background-color: #fffe07;
  font-size: 20px;
  font-weight: bold;
  line-height: 2em;
  margin-bottom: 20px;
  border-radius: 20px;
}
.goods_title .left {
  margin-left: 2%;
}
.goods_title .right {
  float: right;
  margin-top: -4%;
  margin-right: 2%;
}
.goods_item {
  display: flex;
}
.goods_item ul {
  flex: 1;
  margin-left: 3%;
  margin-top: -1%;
  text-align: center;
}
.goods_item li img {
  width: 150px;
  height: 150px;
  border-radius: 15px;
}
.goods_scp {
  font-size: 12px;
  color: silver;
}
.goods_price {
  font-size: 18px;
  color: red;
  font-weight: bolder;
}
</style>