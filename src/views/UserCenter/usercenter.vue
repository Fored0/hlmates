<template>
  <div>
    <tab-bar></tab-bar>
    <!--  -->
    <div class="show">
      <el-container>
        <el-header style="height:100px;">
          <div class="head_img">
            <img :src="userInfo.imgUrl" alt />
            <div class="top_info">
              <p>{{ userInfo.nickName }}</p>
              <p>{{ 'TEL:' + userInfo.phoneNumber }}</p>
            </div>
          </div>
        </el-header>
        <el-main>
          <el-tabs stretch :tab-position="tabPosition" style="height: 450px">
            <!--  -->
            <el-tab-pane label="我的信息">
              <my-info :userCenterData="userCenterData" ></my-info>
            </el-tab-pane>
            <!--  -->
            <el-tab-pane label="收货地址">
              <my-address></my-address>
            </el-tab-pane>
            <el-tab-pane label="关于账号">关于账号</el-tab-pane>
            <el-tab-pane label="修改密码">修改密码</el-tab-pane>
            <el-tab-pane label="更改账户">更改账户</el-tab-pane>
            <el-tab-pane label="退出登录">退出登录</el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

import TabBar from "@/components/tabbar/tabbar";
import MyInfo from './tabItem/myInfo'
import MyAddress from './tabItem/address.vue'
import mockData from './mockData.js'

export default {
  components: {
    TabBar,
    MyInfo,
    MyAddress
},
  data() {
    return {
      userInfo: {},
      tabPosition: 'left',
      userCenterData:mockData
    };
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  }
};
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid silver;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

section.el-container.is-vertical{
border: 1px solid silver;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.show {
  margin-top: 20px;
  width: 96%;
  margin-left: 2%;
  height: 800px;
}
.head_img {
  margin-left: -80%;
  height: 100px;
  margin-top: 0.5%;
  position: relative;
}
.head_img img {
  width: 70px;
  height: 70px;
  border-radius: 10%;
  margin: 5px;
  flex: 1;
}
.desc {
  margin-left: 30%;
}
.top_info {
  position: absolute;
  top: -20%;
  left: 52%;
  margin-top: 1%;
  line-height: 2em;
  text-align: left;
  font-size: 18px;
}
</style>