<template>
  <div>
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="类别">
        <el-select v-model="formData.category" placeholder="请选择">
          <el-option
            v-for="(item, index) in itemsData.category"
            :key="index"
            :label="item.label"
            :value="item.value"
            >{{ item.label }}</el-option
          >
        </el-select>
      </el-form-item>
      <el-form-item label="新旧程度">
        <el-select v-model="formData.degree" placeholder="请选择">
          <el-option
            v-for="(item, index) in itemsData.degree"
            :key="index"
            :label="item.label"
            :value="item.value"
            >{{ item.label }}</el-option
          >
        </el-select>
      </el-form-item>
      <el-form-item label="转让价格">
        <el-input
          v-model="formData.price"
          style="width: 30%"
          placeholder="请为你的宝贝输入一个合适的价格吧"
        ></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input
          v-model="formData.name"
          style="width: 30%"
          placeholder="标题不能为空"
        ></el-input>
      </el-form-item>
      <el-form-item label="详细描述">
        <el-input
          type="textarea"
          v-model="formData.desc"
          style="width: 30%"
          placeholder="描述下转让原因、物品来源、可否面议、物品亮点瑕疵等方面"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-upload
          class="upload-demo"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
          style="width: 30%"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="primary" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "items",
  data() {
    return {
      itemsData: this.$attrs.Data,
      formData: {
        category: "",
        degree: "",
        price: "",
        desc: "",
        img: "",
      },
      fileList: [
        {
          name: "girl.png",
          url: "https://wx1.sinaimg.cn/orj360/006w4fimly1gxhtogm10pj30fe0on75u.jpg",
        },
      ],
    };
  },
  created() {
    // console.log(this);
  },
  methods: {
    // 提交表单
    onSubmit() {
      console.log(this.formData);
    },
    onReset() {
      this.formData = {};
    },
    //上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style scoped>
</style>