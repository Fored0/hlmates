<template>
  <div>
    <div class="nav">
      <div class="img" @click="toHome()">
        <img src="~assets/image/logo.png" alt="" />
      </div>
      <div class="text">
        让你的闲置物品动起来
        <span><mark>「同学你好」二手交易社区</mark></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
@import url("../../assets/iconfont/iconfont.css");
.nav {
  height: 100px;
  width: 100%;
  background-color: #ffff04;
  position: relative;
  margin-bottom: 20px;
}
.nav .img img {
  height: 112px;
  width: 200px;
  margin-left: 6%;
  overflow: hidden;
}
.nav .text {
  position: absolute;
  top: 30px;
  left: 30%;
  font-size: 20px;
}
.text span {
  font-size: 25px;
  font-weight: bolder;
}
</style>