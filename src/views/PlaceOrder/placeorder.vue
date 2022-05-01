<template>
  <div>
    <tab-bar></tab-bar>
    <el-card class="card">
      <div class="current_address">
        <p class="current_title">确认收货地址</p>
        <div class="address_container" v-if="currentAddress.length === 0">
          <div>收货人:{{ renderData.receive[0].receivePeople }}</div>
          <div>
            详细地址:{{
              renderData.receive[0].locationAddress +
              renderData.receive[0].detailAddress
            }}
          </div>
          <div>TEL:{{ renderData.receive[0].receivePhone }}</div>
        </div>
        <div class="address_container" v-else>
          <div>收货人:{{ currentAddress.receivePeople }}</div>
          <div>
            详细地址:{{
              currentAddress.locationAddress + currentAddress.detailAddress
            }}
          </div>
          <div>TEL:{{ currentAddress.receivePhone }}</div>
        </div>
      </div>
      <div class="select_another">
        <el-button @click="selectDialogTableVisible = true"
          >选择其他收货地址</el-button
        >
      </div>
      <div class="confirm_order">
        <p class="current_title">确认订单信息</p>
        <div>
          <el-table
            class="table_order"
            :data="tableData"
            border
            style="width: 100%"
          >
            <el-table-column prop="imgUrl" label="图片" width="180">
              <img :src="tableData.imgUrl" alt=""
            /></el-table-column>
            <el-table-column
              prop="goodsName"
              label="商品"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="count"
              label="姓名"
              width="180"
            ></el-table-column>
            <el-table-column label="支付方式" width="180">
              <el-select v-model="tableData.payByMethods" placeholder="请选择">
                <el-option
                  v-for="item in tableData.payByMethods"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
            ></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="topay__button">
        <el-button type="primary" @click="payDialogTableVisible = true" plain
          >去支付</el-button
        >
      </div>
    </el-card>
    <el-dialog
      title="选择其他收货地址"
      :visible.sync="selectDialogTableVisible"
    >
      <el-table
        highlight-current-row
        @current-change="handleCurrentChange"
        :data="tableData"
      >
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="selectDialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectDialogTableVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="请进行扫码支付" :visible.sync="payDialogTableVisible">
      <div class="pay">
        <img
          src="https://s1.ax1x.com/2022/05/01/OCZz3F.png"
          alt=" 支付二维码"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="payDialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="payDialogTableVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar";
import mockData from "../UserCenter/mockData";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      active: 1,
      renderData: mockData,
      currentAddress: [],
      addressForm: {
        receivePeople: "",
        locationAddress: "",
        detailAddress: "",
      },
      selectDialogTableVisible: false,
      payDialogTableVisible: false,
      isActive: false,
      tableData: [
        {
          imgUrl: "https://s1.ax1x.com/2022/05/01/OCZz3F.png",
          goodsName: "coffee",
          count: 28,
          payByMethods: [
            { label: 0, value: "WeiXin" },
            { label: 1, value: "Alipay" },
          ],
          price: 100,
        },
      ],
      payByMethods: [
        { label: 0, value: "WeiXin" },
        { label: 1, value: "Alipay" },
      ],
    };
  },
  created() {},
  methods: {
    handleCurrentChange(e) {
      this.currentAddress = e;
    },
  },
};
</script>

<style scoped >
.card {
  width: 70%;
  margin-left: 15%;
  margin-top: 20px;
  text-indent: 3em;
}
.current_title {
  font-size: 18px;
  font-weight: 600;
}
.address_container {
  border: 2px dashed rgb(228, 230, 170);
  word-wrap: break-word;
  margin: 10px 0 0 1em;
  cursor: pointer;
}
.address_container div {
  line-height: 2em;
  font-size: 16px;
  width: 100%;
  height: 30px;
  overflow: hidden;
  margin-left: -1em;
}
.address_container_active {
  border: 2px dashed green;
  word-wrap: break-word;
  margin: 10px 0 0 3em;
}
.select_another {
  margin: 10px 0 10px 0;
}
.confirm_order {
  margin: 10px 0 0 10px;
}
.topay__button {
  margin-top: 20px;
  margin-left: 85%;
}
</style>