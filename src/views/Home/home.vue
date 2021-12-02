<template>
<!-- 登陆后首页 -->
  <div class="home">
    <tab-bar></tab-bar>
    <div class="input">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-button
          class="btn"
          icon="el-icon-search"
        ></el-button>
      <div class="recommend">
        <ul>
          <li>为您推荐：</li>
          <li>IPhone 12 全新</li>
          <li>Ipad Air 95新</li>
          <li>Nike AF1电玩像素 未拆封</li>
        </ul>
      </div>
    </div>
    <div class="show_goods">
      <!-- 好物推荐 -->
        <div class="goods_rec">
          <div class="goods_title">
            <div class="left">好物推荐</div>
            <div class="right">换一批</div>
          </div>
          <div class="goods_item">
            <ul>
              <li>
                <img src="~assets/image/goods/01.jpg" alt="">
                <div class="goods_scp">mianshu</div>
                <div class="goods_price">jiage</div>
                </li>
              <li><img src="~assets/image/goods/02.jpg" alt=""></li>
              <li><img src="~assets/image/goods/03.jpg" alt=""></li>
              <li><img src="~assets/image/goods/04.jpg" alt=""></li>
              <li><img src="~assets/image/goods/05.jpg" alt=""></li>
              <li><img src="~assets/image/goods/06.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      <!-- 数码产品 -->
      <div class="goods_rec">
          <div class="goods_title">
            <div class="left">好物推荐</div>
            <div class="right">换一批</div>
          </div>
          <div class="goods_item">
            <ul>
              <li>
                <img src="~assets/image/goods/01.jpg" alt="">
                <div class="goods_scp">mianshu</div>
                <div class="goods_price">jiage</div>
                </li>
              <li><img src="~assets/image/goods/02.jpg" alt=""></li>
              <li><img src="~assets/image/goods/03.jpg" alt=""></li>
              <li><img src="~assets/image/goods/04.jpg" alt=""></li>
              <li><img src="~assets/image/goods/05.jpg" alt=""></li>
              <li><img src="~assets/image/goods/06.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      <!-- 鞋服化妆品 -->
        <div class="goods_rec">
          <div class="goods_title">
            <div class="left">好物推荐</div>
            <div class="right">换一批</div>
          </div>
          <div class="goods_item">
            <ul>
              <li>
                <img src="~assets/image/goods/01.jpg" alt="">
                <div class="goods_scp">mianshu</div>
                <div class="goods_price">jiage</div>
                </li>
              <li><img src="~assets/image/goods/02.jpg" alt=""></li>
              <li><img src="~assets/image/goods/03.jpg" alt=""></li>
              <li><img src="~assets/image/goods/04.jpg" alt=""></li>
              <li><img src="~assets/image/goods/05.jpg" alt=""></li>
              <li><img src="~assets/image/goods/06.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      <!-- 书籍 -->
      <!-- 宿舍小物件 -->
    </div>
  </div>
  <!-- 未登录首页 -->
</template>
<script>
import TabBar from "components/tabbar/tabbar.vue";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
  .input{
    width: 30%;
    margin-left: 35%;
    margin-top: 20px;
    overflow: hidden;
  }
  .btn{
    position: absolute;
    left: 65%;
  }
  .input .recommend ul{
    display: flex;
    margin-top: 15px;
  }
  .input .recommend ul li{
    flex: 1;
    font-size: 15px;
    color: #000000;
  }
  /*  */
  .goods_rec{
    width: 70%;
    margin-left: 15%;
    border: 1px solid sienna;
    margin-top: 20px;
  }
  .goods_title{
    width: 100%;
    height: 40px;
    background-color: #fffe07;
    font-size: 20px;
    font-weight: bold;
    line-height: 2em;
    margin-bottom: 20px;
  }
  .goods_title .right{
    float: right;
    margin-top: -3.5%;
  }
  .goods_item ul{
    display: flex;
  }
  .goods_item ul li{
    flex: 1;
    margin-left: 3%;
  }
  .goods_item li img{
    width: 100px;
    height: 100px;
  }
</style>