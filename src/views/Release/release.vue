<template>
  <div>
    <tab-bar></tab-bar>
    <div class="card">
      <el-tabs type="border-card" stretch class="card_item">
        <el-tab-pane label="数码产品">
          <items :Data="releaseData.smData" />
        </el-tab-pane>
        <!--  -->
        <el-tab-pane label="鞋服化妆品"> 
          <items :Data="releaseData.xfData" />
        </el-tab-pane>
        <el-tab-pane label="书籍">
          <items :Data="releaseData.bookData" />
        </el-tab-pane>
        <el-tab-pane label="宿舍小物品">
          <items :Data="releaseData.roomData" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TabBar from "components/tabbar/tabbar.vue";
import Items from "./detailComs/items.vue";
import mockData from "./mockData";
export default {
  components: {
    TabBar,
    Items,
  },
  data() {
    return {
      releaseData:mockData
    };
  },
};
</script>

<style scoped>
.card {
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
}
.card_item {
  border-radius: 14px;
}
</style>