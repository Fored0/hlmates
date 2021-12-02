<template>
  <div>
    <nav-bar></nav-bar>
    <div class="title">
      <p>注册成为同学你好的mai家</p>
    </div>
    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input
            type="name"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model.number="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/tabbar/navbar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入电话号码"));
        } else {
          if (!/^1[3456789]\d{9}$/.test(value)) {
            callback(new Error("请输入有效手机号码"));
          } else {
            callback();
          }
        }
      }, 100);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validataName = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        phone: "",
      },
      rules: {
        name: [
          {
            validator: validataName,
            trigger: "blur",
          },
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("确认提交!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.title {
  margin-left: 15%;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}
.form {
  margin-left: 15%;
  width: 40%;
  height: 50%;
  border: 1px solid white;
  box-shadow: 1px 1px red solid;
}
</style>