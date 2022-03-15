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
            <el-tab-pane label="个人中心">
              <user-center :userCenterData="userCenterData" ></user-center>
            </el-tab-pane>
            
            <!--  -->
            <el-tab-pane label="我的信息"></el-tab-pane>
            <!--  -->
            <el-tab-pane label="收货地址">收货地址</el-tab-pane>
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
import UserCenter from './tabItem/userCenter'
import mockData from './mockData.js'

export default {
  components: {
    TabBar,
    UserCenter,
    MyGoodsShelves,
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
  background-color: #d1e3f5;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
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
  margin-top: 1%;
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