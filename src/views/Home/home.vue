<template>
  <!-- 登陆后首页 -->
  <div class="home">
    <tab-bar></tab-bar>
    <div class="input">
      <el-input
        placeholder="请输入内容"
        v-model="searchInput"
        clearable
      ></el-input>
      <el-button
        class="btn"
        icon="el-icon-search"
        @click="handleSearch"
      ></el-button>
    </div>
    <div class="show_goods">
      <!-- 数码产品 -->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="goods__title--left">{{ homeData.digital.itemName }}</div>
          <div class="goods__title--right">换一批</div>
        </div>
        <div class="goods__item">
          <div
            class="goods__item--show"
            v-for="(item, index) in homeData.digital.itemList.slice(0, 4)"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
            <img class="goods__item--img" :src="item.url" />
            <div class="goods__item--desc">{{ item.description }}</div>
            <div class="goods__item--price">￥{{ item.price }}</div>
          </div>
        </div>
      </div>
      <!-- 鞋服化妆品 clothes-->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="goods__title--left">{{ homeData.clothes.itemName }}</div>
          <div class="goods__title--right">换一批</div>
        </div>
        <div class="goods__item">
          <div
            class="goods__item--show"
            v-for="(item, index) in homeData.clothes.itemList.slice(0, 4)"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
            <img class="goods__item--img" :src="item.url" />
            <div class="goods__item--desc">{{ item.description }}</div>
            <div class="goods__item--price">￥{{ item.price }}</div>
          </div>
        </div>
      </div>
      <!-- 书籍 book-->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="goods__title--left">{{ homeData.book.itemName }}</div>
          <div class="goods__title--right">换一批</div>
        </div>
        <div class="goods__item">
          <div
            class="goods__item--show"
            v-for="(item, index) in homeData.book.itemList.slice(0, 4)"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
            <img class="goods__item--img" :src="item.url" />
            <div class="goods__item--desc">{{ item.description }}</div>
            <div class="goods__item--price">￥{{ item.price }}</div>
          </div>
        </div>
      </div>
      <!-- 宿舍小物件 roomLittleThing-->
      <div class="goods_rec">
        <div class="goods_title">
          <div class="goods__title--left">
            {{ homeData.roomLittleThing.itemName }}
          </div>
          <div class="goods__title--right">换一批</div>
        </div>
        <div class="goods__item">
          <div
            class="goods__item--show"
            v-for="(item, index) in homeData.roomLittleThing.itemList.slice(
              0,
              4
            )"
            @click="toGoodsDetail(item.id)"
            :key="index"
          >
            <img class="goods__item--img" :src="item.url" />
            <div class="goods__item--desc">{{ item.description }}</div>
            <div class="goods__item--price">￥{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧轮播及新发布提醒 -->
    <div class="right_container">
      <p>为您推荐：</p>
      <div class="swiper">
        <el-carousel
          height="230px"
          trigger="click"
          indicator-position="outside"
        >
          <el-carousel-item v-for="(item, index) in swiperList" :key="index">
            <img style="width: 100%; height: 220px" :src="item.url" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="show_new_goods_message">
        <el-button plain @click="open2">右下角</el-button>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
  <!-- 未登录首页 -->
</template>
<script>
import TabBar from "components/tabbar/tabbar.vue";
import BottomBar from "components/bottombar/bottombar.vue";
import mockData from "./mockData";
import request from "@/network/http.js";
export default {
  components: {
    TabBar,
    BottomBar,
  },
  data() {
    return {
      searchInput: "",
      homeData: mockData,
      swiperList: [
        {
          url: "https://img0.baidu.com/it/u=3073049700,2209615132&fm=253&fmt=auto&app=138&f=JPEG?w=990&h=500",
        },
        {
          url: "https://img0.baidu.com/it/u=2775655496,2255017447&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
        },
        {
          url: "https://img1.baidu.com/it/u=700675537,3936578503&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        },
        {
          url: "https://img0.baidu.com/it/u=3712997108,442011921&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        },
        {
          url: "https://img1.baidu.com/it/u=2476457920,2055857727&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        },
      ],
    };
  },
  methods: {
    toGoodsDetail(id) {
      this.$router.push(`/goodsdetail/${id}`);
    },
    open2() {
      this.$notify({
        title: "自定义位置",
        message: "右下角弹出的消息",
        position: "bottom-right",
        onClick: () => {
          console.log("1");
        },
      });
    },
    loadMore() {},
    handleSearch() {
      console.log(this.searchInput);
      if (this.searchInput.split("").length === 0) {
        this.$message({
          showClose: true,
          message: "请先输入内容再进行查询！",
          type: "error",
        });
      } else {
        this.$router.push(`/search/${this.searchInput}`);
      }
    },
  },
};
</script>

<style scoped>
.show_goods {
  width: 70%;
  margin-left: 3%;
  position: relative;
  float: left;
}

.right_container {
  float: right;
  width: 21%;
  margin-right: 3%;
  margin-top: 0.8%;
}

.right_container p:first-child {
  text-align-last: left;
  font-size: 20px;
}

.swiper {
  margin-top: 10px;
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
  border-radius: 18px;
  min-width: 850px;
  height: 127px;
  cursor: pointer;
}

.goods_title {
  width: 100%;
  height: 30px;
  background-color: #fffe07;
  font-size: 14px;
  font-weight: bold;
  line-height: 2em;
  border-radius: 20px;
}

.goods__title--left {
  float: left;
  margin-left: 5%;
}

.goods__title--right {
  float: left;
  margin-left: 80%;
}

.goods__item {
  width: 100%;
  display: flex;
}

.goods__item--show {
  width: 22%;
  margin-left: 3%;
}

.goods__item--img {
  width: 90px;
  height: 90px;
  margin-top: 3px;
  border-radius: 10px;
}

.goods__item--desc {
  margin-top: -80px;
  margin-left: 100px;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods__item--price {
  margin-left: 100px;
  margin-top: 25px;
  color: red;
}
</style>