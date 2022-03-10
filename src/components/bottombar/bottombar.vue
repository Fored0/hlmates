<template>
  <div class="bottom">
    <el-divider></el-divider>
    <div class="activeText">
      <div class="text" @click="open(aboutUsText,aboutUsTitle)" >关于我们</div>
      <div class="text" @click="open(concatUsText,concatUsTitle)">联系我们</div>
      <div class="text" @click="open(statementText,statementTitle)">免责声明</div>
      <div class="text" @click="open(portalText,portalTitle)">传送门</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomBar',
  data(){
    return{
      aboutUsText:'我们来自于中国,立足于美利坚',
      aboutUsTitle:'关于我们',
      concatUsText:'联系我们,官方Q群12452712',
      concatUsTitle:'联系我们',
      statementText:'责任与我无关',
      statementTitle:'免责声明',
      portalText:'一道打开异世界的大门',
      portalTitle:'传送门'
    }
  },
  methods: {
    open(text,title) {
      this.$alert(text, title,{
        confirmButtonText: '确定'
      });
    }
  }
}
</script>
<style scoped >
.bottom {
  margin-top: 2%;
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