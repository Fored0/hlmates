<template>
  <div>
    <tab-bar></tab-bar>
    <div class="card">
      <el-tabs type="border-card" stretch class="card_item">
        <el-tab-pane label="数码产品">
          <el-form ref="form" :model="SMform" label-width="80px">
            <el-form-item label="类别">
              <el-select v-model="SMform.category" placeholder="请选择">
                <el-option label="手机" value="手机"></el-option>
                <el-option label="电脑" value="电脑"></el-option>
                <el-option label="智能手表" value="智能手表"></el-option>
                <el-option label="耳机耳麦" value="耳机耳麦"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="新旧程度">
              <el-select v-model="SMform.degree" placeholder="请选择">
                <el-option label="九成九新" value="九成九新"></el-option>
                <el-option label="九成新" value="九成新"></el-option>
                <el-option label="八成新" value="八成新"></el-option>
                <el-option label="五成新" value="五成新"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="转让价格">
              <el-input v-model="SMform.price" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="标题">
              <el-input
                v-model="SMform.name"
                style="width: 30%"
                placeholder="标题不能为空"
              ></el-input>
            </el-form-item>
            <el-form-item label="详细描述">
              <el-input
                type="textarea"
                v-model="SMform.desc"
                style="width: 50%"
                placeholder="描述下转让原因、物品来源、可否面议、物品亮点瑕疵等方面"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button type="primary" @click="onReset">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!--  -->
        <el-tab-pane label="鞋服化妆品"> </el-tab-pane>
        <el-tab-pane label="书籍">书籍</el-tab-pane>
        <el-tab-pane label="宿舍小物品">宿舍小物品</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TabBar from "components/tabbar/tabbar.vue";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      // 数码
      SMform: {
        category: "",
        degree: "",
        price: "",
        desc: "",
        img: "",
      },
      // 鞋服
      XFform: {
        category: "",
        degree: "",
        price: "",
        desc: "",
        img: "",
      },
    };
  },
  methods: {
    // 提交表单
    onSubmit() {
      console.log(this.SMform);
    },
    onReset() {
      this.SMform = {};
    },
    //上传图片
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