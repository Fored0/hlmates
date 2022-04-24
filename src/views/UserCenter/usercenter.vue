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
        </el-table>
      </el-card>
    </div>
    <div class="shopCart--table">
      <div class="my--car">我的购物车</div>
      <el-table
        stripe
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @select="selectNotAll()"
        @select-all="selectAll()"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div class="shopCart--bottom" style="margin-top: 20px">
        <div class="shopCart--total">{{ "合计：" }}</div>
        <div>
          <el-button
            class="shopCart--option"
            type="danger"
            round
            @click="toPay()"
            >去结算</el-button
          >
        </div>
      </div>
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
            :placeholder="userCenterData.userCenter.userName"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.nickName"
            autocomplete="off"
            :placeholder="userCenterData.userCenter.nickName"
          ></el-input> </el-form-item
        ><el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.phoneNumber"
            autocomplete="off"
            :placeholder="userCenterData.userCenter.phoneNumber"
          ></el-input> </el-form-item
        ><el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.email"
            autocomplete="off"
            :placeholder="userCenterData.userCenter.email"
          ></el-input> </el-form-item
        ><el-form-item label="所在院校" :label-width="formLabelWidth">
          <el-input
            v-model="infoForm.school"
            autocomplete="off"
            :placeholder="userCenterData.userCenter.school"
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
import mockData from "./mockData.js";
import { map } from "./map";
import request from "@/network/http.js";
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
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  created() {
    this.shopCartData = this.$store.state.shopCart.data;
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
    toPay() {
      console.log(this.$refs.multipleTable);
      // console.log(this.);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    selectNotAll(e) {
      console.log(e);
    },
    selectAll(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.card {
  width: 50vw;
  margin-left: 2vw;
  margin-top: 20px;
}
.opeBtn {
  float: right;
  margin-top: -25px;
}
.shopCart__card {
  position: absolute;
  right: 3vw;
  top: 90px;
  width: 22vw;
  height: 501px;
  overflow-y: scroll;
}
.shopCart--table {
  position: absolute;
  width: 44%;
  right: 2%;
  top: 85px;
}
.my--car {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}
.shopCart--bottom {
  display: flex;
}
.shopCart--total {
  width: 50%;
  color: red;
  font-size: 15px;
  margin-left: 66px;
  padding-top: 10px;
}
.shopCart--option {
}
</style>