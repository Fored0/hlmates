<template>
  <div>
    <tab-bar />
    <div class="card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h4>基本信息</h4>
          <el-button
            class="opeBtn"
            @click="infoDialogVisible = true"
            size="small"
            type="primary"
            >编辑信息</el-button
          >
          <el-button
            class="opeBtn"
            @click="handleLoginOut"
            size="small"
            type="warning"
            style="margin-right: 20px"
            >退出登录</el-button
          >
        </div>
        <el-descriptions direction="vertical" :column="3" border>
          <el-descriptions-item label="账户名">{{
            userCenterData.userAccount
          }}</el-descriptions-item>
          <el-descriptions-item label="昵称">{{
            userCenterData.userName
          }}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{
            userCenterData.phone
          }}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{
            userCenterData.emile
          }}</el-descriptions-item>
          <el-descriptions-item label="所在院校">{{
            userCenterData.school
          }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>
    <div class="card">
      <el-card>
        <div slot="header" class="clearfix">
          <h4>收货信息</h4>
          <el-button
            @click="addressDialogVisible = true"
            class="opeBtn"
            size="small"
            type="primary"
            >新增收货地址</el-button
          >
        </div>
        <el-table :data="addressData" style="width: 100%">
          <el-table-column label="所在地区" width="240">
            <template slot-scope="scope">
              <span>{{ scope.row.area }}</span>
            </template>
          </el-table-column>
          <el-table-column label="详细地址" width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.address }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="editAddress(scope)"
                >修改</el-button
              >
              <el-button size="mini" type="danger" @click="deleteAddress(scope)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <!-- dialog -->
    <el-dialog
      width="30%"
      title="修改个人信息"
      :visible.sync="infoDialogVisible"
    >
      <el-form :model="infoForm">
        <el-form-item label="账户名" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.userAccount"
            autocomplete="off"
            disabled
            :placeholder="userCenterData.userAccount"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.userName"
            autocomplete="off"
            :placeholder="userCenterData.userName"
          ></el-input> </el-form-item
        ><el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.phone"
            autocomplete="off"
            :placeholder="userCenterData.phone"
          ></el-input> </el-form-item
        ><el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.emile"
            autocomplete="off"
            :placeholder="userCenterData.emile"
          ></el-input> </el-form-item
        ><el-form-item label="所在院校" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.school"
            autocomplete="off"
            :placeholder="userCenterData.school"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="infoDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="infoModifyDialogOnSave()"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      width="30%"
      title="添加收货信息"
      :visible.sync="addressDialogVisible"
    >
      <el-form :model="addressForm">
        <el-form-item label="添加收货地址" :label-width="formLabelWidth">
          <el-cascader
            style="width: 100%"
            ref="areaRef"
            :options="options"
            v-model="addressForm.locationAddress"
            clearable
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addressDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addressDialogOnSave()"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar";
import { map } from "./map";
import request from "@/network/http.js";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      userCenterData: {},
      userAccount: 2889745514,
      addressData: {},
      infoDialogVisible: false,
      addressDialogVisible: false,
      formLabelWidth: "120px",
      options: map,
      infoForm: {
        userAccount: "",
        userName: "",
        phone: "",
        emile: "",
        school: "",
      },
      addressForm: {
        receivePeople: "",
        locationAddress: "",
        detailAddress: "",
      },
    };
  },
  created() {
    this.userAccount = JSON.parse(localStorage.getItem("userInfo")).userAccount;
    this.getUserInfo();
    this.getUserAddress();
  },
  methods: {
    handleLoginOut() {
      localStorage.clear();
      this.$router.push("/home");
    },
    editAddress(e) {
      this.addressDialogVisible = true;
    },
    deleteAddress(scope) {
      this.$confirm("确认删除该地址", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then((res) => {
          const formData = new FormData();
          formData.append(
            "id",
            JSON.parse(localStorage.getItem("userInfo")).id
          );
          request.post("userAddress/deleteUserAddress", formData).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getUserAddress();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消下架",
          });
        });
    },
    addressDialogOnSave() {
      let locationAddress = this.$refs.areaRef.getCheckedNodes()[0].pathLabels;
      this.addressDialogVisible = false;
      request
        .post("userAddress/createUserAddress", {
          userId: this.userAccount,
          area: locationAddress[0],
          address: locationAddress[1] + locationAddress[2],
        })
        .then((res) => {
          this.getUserAddress();
        });
    },
    infoModifyDialogOnSave() {
      request
        .post("user/updateUserInfo", {
          userAccount: this.userAccount,
          phone:
            this.infoForm.phone === ""
              ? this.userCenterData.phone
              : this.infoForm.phone,
          emile:
            this.infoForm.emile === ""
              ? this.userCenterData.emile
              : this.infoForm.emile,
          school:
            this.infoForm.school === ""
              ? this.userCenterData.school
              : this.infoForm.school,
        })
        .then((res) => {
          if (res.data.code === 200) {
            localStorage.setItem("userInfo", JSON.stringify(this.infoForm));
          }
        });
      this.infoDialogVisible = false;
    },
    getUserInfo() {
      var formData = new FormData(); // 创建一个formData对象
      formData.append("userAccount", this.userAccount); // 给这个对象添加键值对
      request
        .post("user/queryUserInfo", formData)
        .then((data) => {
          const { entity } = data.data.data;
          this.userCenterData = entity;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    getUserAddress() {
      const formData = new FormData();
      formData.append("userId", this.userAccount);
      request.post("userAddress/selectUserAddress", formData).then((res) => {
        const { list } = res.data.data;

        this.addressData = list;
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 70vw;
  margin-left: 15vw;
  margin-top: 20px;
}
.opeBtn {
  float: right;
  margin-top: -25px;
}
</style>