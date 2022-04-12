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
          <el-descriptions-item label="用户名">{{
            userCenterData.userCenter.userName
          }}</el-descriptions-item>
          <el-descriptions-item label="昵称">{{
            userCenterData.userCenter.nickName
          }}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{
            userCenterData.userCenter.phoneNumber
          }}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{
            userCenterData.userCenter.email
          }}</el-descriptions-item>
          <el-descriptions-item label="所在院校">{{
            userCenterData.userCenter.school
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
        <el-table :data="userCenterData.receive" style="width: 100%">
          <el-table-column label="收货人" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{
                scope.row.receivePeople
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="所在地区" width="380">
            <template slot-scope="scope">
              <span>{{ scope.row.locationAddress }}</span>
            </template>
          </el-table-column>
          <el-table-column label="详细地址" width="380">
            <template slot-scope="scope">
              <span>{{ scope.row.detailAddress }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="deleteAddress(scope)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="shopCart__card">
      <ul>
        <li v-for="item in shopCartData" :key='item.id' >{{item.id}}</li>
      </ul>
    </div>
    <el-dialog
      width="30%"
      title="修改个人信息"
      :visible.sync="infoDialogVisible"
    >
      <el-form :model="infoForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="infoForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.nickName"
            autocomplete="off"
          ></el-input> </el-form-item
        ><el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.phoneNumber"
            autocomplete="off"
          ></el-input> </el-form-item
        ><el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.email"
            autocomplete="off"
          ></el-input> </el-form-item
        ><el-form-item label="所在院校" :label-width="formLabelWidth">
          <el-input v-model="infoForm.school" autocomplete="off"></el-input>
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
import mockData from "./mockData.js";
import { map } from "./map";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      userCenterData: mockData,
      infoDialogVisible: false,
      addressDialogVisible: false,
      formLabelWidth: "120px",
      options: map,
      shopCartData:[],
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
  created(){
    this.shopCartData = this.$store.state.shopCart.data
  },
  methods: {
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
      this.infoDialogVisible = false;
    },
    load() {
      this.count += 2;
    },
  },
};
</script>

<style scoped>
.card {
  width: 70vw;
  margin-left: 2vw;
  margin-top: 20px;
}
.opeBtn {
  float: right;
  margin-top: -25px;
}
.shopCart__card {
  float: right;
  position: absolute;
  right: 3vw;
  top: 90px;
  width: 22vw;
  height: 550px;
  background-color: red;
  overflow: scroll;
}
</style>