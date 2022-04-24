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
        <el-form-item label="账户名" prop="userAccount">
          <el-input
            v-model.number="ruleForm.userAccount"
            placeholder="账户名注册之后就不能修改了哦！"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <el-input
            type="name"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input
            type="name"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="所在院校" prop="school">
          <el-input
            type="name"
            v-model="ruleForm.school"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱账号" prop="emile">
          <el-input
            type="name"
            v-model="ruleForm.emile"
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

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册并登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/tabbar/navbar.vue";
import request from "@/network/http";

export default {
  components: {
    NavBar,
  },
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        callback(new Error("账户名只能为数字哦"));
      } else {
        callback();
      }
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
      if (value === "") {
        callback(new Error("请输入昵称"));
      } else {
        callback();
      }
    };
    var validataPhone = (rule, value, callback) => {
      if (value.split("").length < 11) {
        callback(new Error("请输入有效电话号码"));
      } else {
        callback();
      }
    };
    var validataSchool = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入所在院校"));
      } else {
        callback();
      }
    };
    var validataEmile = (rule, value, callback) => {
      const reg =
        /([a-z]|[0-9])+((\.|\-|_)?([a-z]|[0-9])+)*@[a-z]+(\-?[a-z]+)*(\.[a-z]+(\-?[a-z]+)*)+/;
      if (!reg.test(value)) {
        callback(new Error("邮箱账号格式不正确！请重新输入"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        userAccount: "",
        school: "",
        phone: "",
        emile: "",
      },
      rules: {
        name: [{ validator: validataName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        userAccount: [{ validator: checkAccount, trigger: "blur" }],
        phone: [{ validator: validataPhone, trigger: "blur" }],
        school: [{ validator: validataSchool, trigger: "blur" }],
        emile: [{ validator: validataEmile, trigger: "blur" }],
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
      console.log(this.ruleForm);
      request
        .post("user/userRegister", {
          userName: this.ruleForm.name,
          phone: this.ruleForm.phone,
          emile: this.ruleForm.emile,
          school: this.ruleForm.school,
          password: this.ruleForm.pass,
          userAccount: this.ruleForm.userAccount,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          throw new Error(err);
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