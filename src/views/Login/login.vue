<template>
  <div>
    <nav-bar></nav-bar>
    <div class="title">登录<span>「同学你好」</span></div>
    <div class="form">
      <el-form ref="form" :model="form" :label-position="labelPosition">
        <div v-if="!isShowModify">
          <el-form-item label="账号名">
            <el-input v-model="form.name" style="width: 20%"></el-input>
          </el-form-item>
          <el-form-item label="帐号密码">
            <el-input
              v-model="form.password"
              style="width: 20%"
              show-password
            ></el-input>
          </el-form-item>
        </div>
        <div v-else>
          <el-form-item label="账号名">
            <el-input v-model="form.name" style="width: 20%"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input
              v-model="form.password"
              style="width: 20%"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input
              v-model="form.password"
              style="width: 20%"
              show-password
            ></el-input>
          </el-form-item>
        </div>
        <div class="btn">
          <el-button @click="handleLogin" type="primary" size="large" round
            >登录</el-button
          >
          <el-button @click="handleRegister" type="primary" size="large" round
            >还没帐号？去注册</el-button
          >
        </div>
      </el-form>
      <div class="option">
        <div @click="toRep" class="rep">
          {{ isShowModify ? "放弃修改！" : "忘记密码？点我修改！" }}
        </div>
      </div>
    </div>
    <div class="bottom__bar">
      <bottom-bar></bottom-bar>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/tabbar/navbar.vue";
import BottomBar from "../../components/bottombar/bottombar";
import request from "@/network/http.js";
export default {
  components: {
    NavBar,
    BottomBar,
  },
  data() {
    return {
      isShowModify: false,
      form: {
        name: "",
        password: "",
      },
      radio: "",
      labelPosition: "top",
    };
  },
  methods: {
    toRep() {
      // this.$router.push("register");
      this.isShowModify = !this.isShowModify;
    },
    handleLogin() {
      // 校验用户账号密码
      // 获取用户信息，更新主页头像（可缓存到本地）
      console.log(this.form);
      this.$http.post("user/judgeAccountAndPassword", {
        username: this.form.username,
        password: this.form.password,
      });
    },
    handleRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-size: cover;
}

.title {
  margin-left: 15%;
  font-size: 25px;
  font-weight: bold;
}

.title span {
  font-size: 18px;
}

.form {
  margin-left: 15%;
  margin-top: 2%;
}

.option {
  display: flex;
  margin-top: 2%;
  width: 300px;
}

.option div {
  flex: 1;
}

.rep {
  cursor: pointer;
  color: rgb(221, 96, 23);
  font-weight: lighter;
}

.bottom__bar {
  width: 100vw;
  bottom: 0;
}
</style>