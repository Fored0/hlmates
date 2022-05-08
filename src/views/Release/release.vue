<template>
  <div>
    <tab-bar></tab-bar>
    <div class="card">
      <el-tabs
        type="border-card"
        @tab-click="changeType"
        stretch
        class="card_item"
      >
        <el-tab-pane label="数码产品">
          <items :Data="releaseData.smData" :releaseType="releaseType" />
        </el-tab-pane>
        <!--  -->
        <el-tab-pane label="鞋服化妆品">
          <items :Data="releaseData.xfData" :releaseType="releaseType" />
        </el-tab-pane>
        <el-tab-pane label="书籍">
          <items :Data="releaseData.bookData" :releaseType="releaseType" />
        </el-tab-pane>
        <el-tab-pane label="宿舍小物品">
          <items :Data="releaseData.roomData" :releaseType="releaseType" />
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
      releaseData: mockData,
      //releaseType,0:数码产品,1鞋服化妆品:,2:书籍,3:宿舍小物品,
      releaseType: 0,
    };
  },
  watch: { releaseType: "releaseType" },
  methods: {
    changeType(type, event) {
      const {
        $options: {
          propsData: { label },
        },
      } = type;
      console.log(this.watch);
      let releaseType = 0;
      if (label === "数码产品") {
        this.releaseType = 0;
      } else if (label === "鞋服化妆品") {
        this.releaseType = 1;
      } else if (label === "书籍") {
        this.releaseType = 2;
      } else if (label === "宿舍小物品") {
        this.releaseType = 3;
      } else {
        this.releaseType = 0;
      }
      console.log("type", this.releaseType);
    },
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