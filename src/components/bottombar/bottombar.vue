<template>
  <div class="bottom">
    
    <div class="activeText">
      <div class="text">
        <el-popover
          placement="top-start"
          title="关于我们"
          width="200"
          trigger="hover"
          content="我们来自于中国,立足于美利坚。"
        >
          <el-button type="text" slot="reference">关于我们</el-button>
        </el-popover>
      </div>
      <div class="text">
        <el-popover
          placement="top-start"
          title="联系我们"
          width="200"
          trigger="hover"
          content="联系我们,官方Q群12452712。"
        >
          <el-button type="text" slot="reference">联系我们</el-button>
        </el-popover>
      </div>
      <div class="text">
        <el-popover
          placement="top-start"
          title="免责声明"
          width="200"
          trigger="hover"
          content="责任与我无关。"
        >
          <el-button type="text" slot="reference">免责声明</el-button>
        </el-popover>
      </div>
      <div class="text">
        <el-popover
          placement="top-start"
          title="传送门"
          width="200"
          trigger="hover"
          content="一道打开异世界的大门。"
        >
          <el-button type="text" slot="reference">传送门</el-button>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomBar",
  data() {
    return {
     
    };
  },
  methods: {
    open(text, title) {
      this.$alert(text, title, {
        confirmButtonText: "确定",
      });
    },
  },
};
</script>
<style scoped >
.bottom {
  width: 70%;
  margin-left: 15%;
  height: 150px;
}
.activeText {
  display: inline-flex;
  width: 70%;
  margin-left: 15%;
}
.text {
  flex: 1;
  width: 200px;
  font-size: 18px;
  color: rgb(53, 50, 50);
  font-family: "Courier New", Courier, monospace;
}
</style>