<template>
  <div>
    <tab-bar />
    <div class="card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h4>基本信息</h4>
          <el-button class="opeBtn" @click="infoDialogVisible=true" size="small" type="primary">编辑信息</el-button>
        </div>
        <el-descriptions direction="vertical" :column="3" border>
          <el-descriptions-item label="用户名">{{ userCenterData.userCenter.userName }}</el-descriptions-item>
          <el-descriptions-item label="昵称">{{ userCenterData.userCenter.nickName }}</el-descriptions-item>
          <el-descriptions-item label="手机号">{{ userCenterData.userCenter.phoneNumber }}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{ userCenterData.userCenter.email }}</el-descriptions-item>
          <el-descriptions-item label="所在院校">{{ userCenterData.userCenter.school }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>
    <div class="card">
      <el-card>
        <div slot="header" class="clearfix">
          <h4>收货信息</h4>
          <el-button class="opeBtn" size="small" type="primary">新增收货地址</el-button>
        </div>
        <el-table :data="userCenterData.receive" style="width: 100%">
          <el-table-column label="收货人" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.receivePeople }}</span>
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
              <el-button size="mini" type="danger" @click="deleteAddress(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <el-dialog title="修改个人信息" :visible.sync="infoDialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="infoDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="infoDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar";
import mockData from './mockData.js'
export default {
  components: {
    TabBar
  },
  data() {
    return {
      userCenterData: mockData,
      infoDialogVisible: false
    }
  },
  methods: {
    deleteAddress(scope) {
      console.log(scope.row.id);
    }
  }
}
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