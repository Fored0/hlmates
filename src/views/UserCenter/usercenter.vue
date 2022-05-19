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
        <!-- <el-table :data="userCenterData.receive" style="width: 100%">
          <el-table-column label="收货人" width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{
                scope.row.receivePeople
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="所在地区" width="240">
            <template slot-scope="scope">
              <span>{{ scope.row.locationAddress }}</span>
            </template>
          </el-table-column>
          <el-table-column label="详细地址" width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.detailAddress }}</span>
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
        </el-table> -->
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
            v-model="infoForm.userName"
            autocomplete="off"
            disabled
            :placeholder="userCenterData.userAccount"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.nickName"
            autocomplete="off"
            :placeholder="userCenterData.userName"
          ></el-input> </el-form-item
        ><el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.phoneNumber"
            autocomplete="off"
            :placeholder="userCenterData.phone"
          ></el-input> </el-form-item
        ><el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.email"
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
        <el-form-item label="添加收货人" :label-width="formLabelWidth">
          <el-input
            v-model="addressForm.receivePeople"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="添加收货地址" :label-width="formLabelWidth">
          <el-cascader
            style="width: 100%"
            ref="areaRef"
            :options="options"
            v-model="addressForm.locationAddress"
            clearable
          ></el-cascader> </el-form-item
        ><el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input
            v-model="addressForm.detailAddress"
            autocomplete="off"
          ></el-input>
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
      infoDialogVisible: false,
      addressDialogVisible: false,
      formLabelWidth: "120px",
      options: map,
      infoForm: {
        userName: "",
        nickName: "",
        phoneNumber: "",
        email: "",
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
    this.getUserInfo();
  },
  methods: {
    editAddress(e) {
      console.log(e);
    },
    deleteAddress(scope) {
      console.log(scope.row.id);
      console.log(this.$store.state.shopCart.data);
    },
    addressDialogOnSave() {
      console.log(this.$refs.areaRef.getCheckedNodes()[0].pathLabels);
      let locationAddress = this.$refs.areaRef.getCheckedNodes()[0].pathLabels;
      console.log(this.addressForm);
      this.addressDialogVisible = false;
    },
    infoModifyDialogOnSave() {
      console.log(this.infoForm);
      request.post("user/updateUserInfo", {
        userAccount: this.userCenterData.userCenter.userName,
        userName:
          this.infoForm.nickName === ""
            ? this.userCenterData.userCenter.nickName
            : this.infoForm.nickName,
        phone:
          this.infoForm.phoneNumber === ""
            ? this.userCenterData.userCenter.phoneNumber
            : this.infoForm.phoneNumber,
        emile:
          this.infoForm.email === ""
            ? this.userCenterData.userCenter.email
            : this.infoForm.email,
        school:
          this.infoForm.school === ""
            ? this.userCenterData.userCenter.school
            : this.infoForm.school,
      });
      this.infoDialogVisible = false;
    },
    getUserInfo() {
      var formData = new FormData(); // 创建一个formData对象
      formData.append("userAccount", 19983994890); // 给这个对象添加键值对
      request
        .post("user/queryUserInfo", formData)
        .then((data) => {
          const { entity } = data.data.data;
          this.userAccount = entity;
          console.log("data", this.userAccount);
        })
        .catch((err) => {
          console.log("err", err);
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