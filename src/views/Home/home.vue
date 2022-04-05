<template>
  <!-- 登陆后首页 -->
  <div class="home">
    <tab-bar></tab-bar>
    <div class="input">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-button class="btn" icon="el-icon-search"></el-button>
    </div>
    <div class="show_goods">
      <!-- 数码产品 -->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="left">{{ homeData.digital.itemName }}</div>
          <div class="right">换一批</div>
        </div>
        <div class="goods_item">
          <ul
            v-for="(item, index) in homeData.digital.itemList"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
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
          <ul
            v-for="(item, index) in homeData.clothes.itemList"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
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
          <ul
            v-for="(item, index) in homeData.book.itemList"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
            <li>
              <img :src="item.url" alt />
              <div class="goods_scp">{{ item.description }}</div>
              <div class="goods_price">￥{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 宿舍小物件 -->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="left">{{ homeData.roomLittleThing.itemName }}</div>
          <div class="right">换一批</div>
        </div>
        <div class="goods_item">
          <ul
            v-for="(item, index) in homeData.roomLittleThing.itemList"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
            <li>
              <img :src="item.url" alt />
              <div class="goods_scp">{{ item.description }}</div>
              <div class="goods_price">￥{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 右侧轮播及新发布提醒 -->
    <div class="swiper">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item,index in swiperList" :key="index">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <bottom-bar></bottom-bar>
  </div>
  <!-- 未登录首页 -->
</template>
<script>
import TabBar from "components/tabbar/tabbar.vue";
import BottomBar from "components/bottombar/bottombar.vue";
import mockData from "./mockData";
export default {
  components: {
    TabBar,
    BottomBar,
  },
  data() {
    return {
      input: "",
      homeData:mockData,
      swiperList:[
        {url:'https://img0.baidu.com/it/u=3073049700,2209615132&fm=253&fmt=auto&app=138&f=JPEG?w=990&h=500'},
        {url:'https://img0.baidu.com/it/u=3073049700,2209615132&fm=253&fmt=auto&app=138&f=JPEG?w=990&h=500'},
        {url:'https://img0.baidu.com/it/u=3073049700,2209615132&fm=253&fmt=auto&app=138&f=JPEG?w=990&h=500'},
        {url:'https://img0.baidu.com/it/u=3073049700,2209615132&fm=253&fmt=auto&app=138&f=JPEG?w=990&h=500'},
        {url:'https://img0.baidu.com/it/u=3073049700,2209615132&fm=253&fmt=auto&app=138&f=JPEG?w=990&h=500'}
      ]
    };
  },
  methods: {
    toGoodsDetail(id) {
      this.$router.push(`/goodsdetail/${id}`);
    },
  }
};
</script>

<style scoped>
.show_goods {
  width: 70%;
  margin-left: 3%;
  position: relative;
  float: left;
}
.swiper{
  float: right;
  width: 21%;

  margin-right: 3%;
}
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
  border: 1px solid rgb(177, 152, 141);
  margin-top: 20px;
  border-radius: 20px;
  min-width: 850px;
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
  float: left;
}
.goods_title .right {
  float: right;
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
  width: 130px;
  height: 130px;
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