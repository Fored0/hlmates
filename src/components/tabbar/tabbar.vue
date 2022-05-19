<template>
  <div class="tabbar">
    <div class="left">
      <i class="el-icon-s-home" @click="$router.push('/home')">主页</i>
    </div>
    <div class="center">
      <h2 style="margin-right: 5px">{{ userInfo.userName }}</h2>
      你好！欢迎来到&nbsp;同学你好&nbsp;二手交易平台
    </div>
    <div class="right">
      <div class="login">
        <div v-if="hasLoginned" @click="toTargetPath('usercenter')">
          <img
            class="headImg"
            :src="
              userInfo.imgUrl
                ? userInfo.imgUrl
                : 'https://img0.baidu.com/it/u=4060770951,4069855872&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
            "
            alt=""
          />
        </div>
        <button v-else class="button" @click="$router.push('/login')">
          登录
        </button>
      </div>
      <p class="item" @click="toTargetPath('message')">消息</p>
      <p class="item" @click="toTargetPath('shopCart')">购物车</p>
      <p class="item" @click="toTargetPath('order')">我的订单</p>
      <p class="item" @click="toTargetPath('myrelease')">我的发布</p>
      <p class="item">
        <el-button
          class="publishBtn"
          @click="toTargetPath('release')"
          type="primary"
          >发布商品</el-button
        >
      </p>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>该功能需要登录才能使用哦，请先登录！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$router.push('/register'), (dialogVisible = false)"
          >没有账号？去注册</el-button
        >
        <el-button
          type="primary"
          @click="$router.push('/login'), (dialogVisible = false)"
          >已有帐号？去登录</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    username: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      userInfo: {},
      hasLoginned: false,
      dialogVisible: false,
    };
  },
  created() {
    this.getUserInfo();
  },
  beforeUpdate() {
    this.getUserInfo();
  },
  methods: {
    // 页面跳转
    toTargetPath(path) {
      if (this.hasLoginned) {
        this.$router.push(`/${path}`);
      } else {
        this.dialogVisible = true;
      }
    },
    getUserInfo() {
      const localStorageUserInfo = localStorage.getItem("userInfo");
      if (
        localStorage.getItem("userInfo") === null ||
        localStorage.getItem("userInfo") === undefined
      ) {
        return;
      } else {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(this.userInfo);
        Object.keys(this.userInfo).length !== 0
          ? (this.hasLoginned = true)
          : (this.hasLoginned = false);
      }
    },
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
  margin-left: 57%;
  display: flex;
  width: 40%;
  position: absolute;
  top: 20px;
}
.right p {
  flex: 1;
}
.button {
  width: 50px;
  height: 50px;
  margin-right: 50px;
  border-radius: 50%;
  margin-top: -12px;
  border: 1px solid white;
}
.publishBtn {
  margin-top: -5px;
  background-color: rgb(12, 12, 12);
  border: 0;
  color: #fffe07;
}
.headImg {
  width: 50px;
  height: 50px;
  margin-top: -12px;
  border-radius: 50%;
  margin-right: 50px;
}
</style>