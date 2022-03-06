<template>
  <div>
    <tab-bar></tab-bar>
    <div class="card">
      <el-tabs type="border-card" stretch class="card_item">
        <el-tab-pane label="数码产品">
          <items :Data="smData" />
        </el-tab-pane>
        <!--  -->
        <el-tab-pane label="鞋服化妆品"> 
          <items :Data="smData" />
        </el-tab-pane>
        <el-tab-pane label="书籍">
          <items :Data="smData" />
        </el-tab-pane>
        <el-tab-pane label="宿舍小物品">
          <items :Data="smData" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TabBar from "components/tabbar/tabbar.vue";
import Items from "./detailComs/items.vue";
export default {
  components: {
    TabBar,
    Items,
  },
  data() {
    return {
      //传入子组件select选项
      smData: {
        category: [
          { label: "手机", value: "手机" },
          { label: "电脑", value: "电脑" },
        ],
        degree: [
          { label: "九成九新", value: "九成九新" },
          { label: "九成新", value: "九成新" },
        ],
        seconSelect:'新旧程度',//第二个下拉框名字配置,可用可不用
      },
      xfData:{
        category: [
          { label: "化妆品", value: "化妆品" },
          { label: "衣服", value: "衣服" },
        ],
        degree: [
          { label: "九成九新", value: "九成九新" },
          { label: "九成新", value: "九成新" },
        ],
        seconSelect:''
      }
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