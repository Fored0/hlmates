<template>
  <div class="all">
    <div class="head">我的信息</div>
    <div class="info">
      <div class="info_item">
        <div class="left" >用户名称</div>
        <div class="right" >{{ userCenterData.userCenter.userName }}</div>
      </div>
      <div class="info_item">
        <div class="left" >昵称</div>
        <div class="right">{{ userCenterData.userCenter.nickName }}</div>
      </div>
      <div class="info_item">
        <div class="left" >联系方式</div>
        <div class="right">{{ userCenterData.userCenter.phoneNumber }}</div>
      </div>
      <div class="info_item">
        <div class="left" >邮箱</div>
        <div class="right">{{ userCenterData.userCenter.email }}</div>
      </div>
      <div class="info_item">
        <div class="left" >所在学校</div>
        <div class="right">{{ userCenterData.userCenter.school }}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    userCenterData: {
      type: Object
    }
  }
}
</script>

<style scoped>
.all {
  text-align: left;
  margin-left: 50px;
}
.head {
  color: red;
  font-size: 20px;
}
.info {
  height: 300px;
  line-height: 40px;
  margin-left: 40px;
  margin-top: -50px;
}
.info_item{
  clear: both;
}
.left{
  float: left;
  width: 80px;
  font-size: 18px;
  font-weight: bold;
  text-align-last: justify;
  font-family: 楷体;
}
.right{
  float: left;
  margin-left: 200px;
  text-align: left;
  font-family: 宋体;
  font-size: 16px;
}
.btn{
  margin-top: -130px;
  margin-left: 500px;
}
</style>

