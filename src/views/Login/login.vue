<template>
  <div>
    <nav-bar></nav-bar>
    <div class="title">登录<span>「同学你好」</span></div>
    <div class="form">
      <el-form ref="form" :model="form" :label-position="labelPosition">
        <el-form-item label="用户名">
          <el-input
            v-model="form.name"
            style="width: 20%"
          ></el-input> </el-form-item
        ><el-form-item label="用户密码">
          <el-input
            v-model="form.password"
            style="width: 20%"
            show-password
          ></el-input>
        </el-form-item>
        <div class="btn">
          <el-button @click="handleLogin" type="primary" size="mini" plain round>登录</el-button>
        </div>
      </el-form>
      <div class="caozuo">
        <div><input type="radio" />记住密码</div>
        <div @click="toRep" class="rep">忘记密码？点我去修改</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/tabbar/navbar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      form: {
        name: "",
        passwprd: "",
      },
      radio: "",
      labelPosition: "top",
    };
  },
  methods: {
    toRep() {
      this.$router.push("register");
    },
    handleLogin(){
      // 校验用户账号密码
      this.$router.push("home")
      // 获取用户信息，更新主页头像（可缓存到本地）
    }
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
.caozuo {
  display: flex;
  margin-top: 2%;
  width: 300px;
}
.caozuo div {
  flex: 1;
}
.rep{
  cursor: pointer;
  color: rgb(221, 96, 23);
  font-weight: lighter;
}
</style>