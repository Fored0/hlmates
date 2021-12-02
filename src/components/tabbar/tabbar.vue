<template>
  <div class="tabbar">
    <div class="left">
      <i class="el-icon-s-home" @click="toHome">主页</i>
    </div>
    <div class="center">
      {{ username }}你好！欢迎来到&nbsp;同学你好&nbsp;二手交易平台
    </div>
    <div class="right">
      <div class="login">
        <button class="button" @click='toLogin'>登录</button>
      </div>
      <p class="item" @click="toMessage">消息</p>
      <p class="item" @click="toOrder">我的订单</p>
      <p class="item" @click="toGoods">我的发布</p>
      <p class="item" @click="toRelease"><button>发布商品</button></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: "",
    },
  },
  methods: {
    // 页面跳转
    toLogin(){
      this.$router.push("/login")
    },
    toHome() {
      this.$router.push("/home");
    },
    toMessage() {
      this.$router.push("/message");
    },
    toOrder() {
      this.$router.push("/order");
    },
    toRelease() {
      this.$router.push("/release");
    },
    toGoods() {
      this.$router.push("/goods");
    },
    toLogin(){
      this.$router.push('/login')
    },
    toRegister(){
      this.$router.push('/register')
    }
  },
};
</script>
<style  scoped>
.tabbar {
  background-color: #fffe07;
  font-family: HarmonyOS_Sans_SC_Light;
  font-weight: lighter;
  height: 66px;
  width: 100%;
  display: flex;
  position: relative;
  font-size: 18px;
}
.tabbar:hover {
  cursor: pointer;
}
.left:hover,
.right p:hover {
  color: green;
}
.left {
  position: absolute;
  float: left;
  top: 20px;
  margin-left: 5%;
}
.center {
  position: absolute;
  display: flex;
  margin-left: 20%;
  align-items: center;
  top: 20px;
}
.right {
  margin-left: 60%;
  display: flex;
  width: 40%;
  position: absolute;
  top: 20px;
}
.right p {
  flex: 1;
}
.button {
  width: 60px;
  height: 60px;
  margin-right: 50px;
  border-radius: 35%;
  margin-top: -17px;
  border: 1px solid white;
}
</style>