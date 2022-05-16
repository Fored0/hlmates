<template>
  <div>
    <!--  -->
    <tab-bar></tab-bar>
    <!--  -->
    <el-tabs stretch class="card">
      <el-tab-pane label="我买入的">
        <el-table
          v-if="orderData.tableData.length !== 0"
          :data="orderData.tableData"
          style="width: 100%"
        >
          <el-table-column prop="detail" label="订单详情" width="390">
            <template slot-scope="scope">
              <img :src="scope.row.imgUrlList[0]" alt style="width: 150px" />
              <div class="desc_span">{{ scope.row.desc }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="收货地址"
            width="260"
          ></el-table-column>
          <el-table-column label="金额/付款方式" width="150">
            <template slot-scope="scope">
              <div>
                <p>{{ scope.row.price }}</p>
                <p>{{ scope.row.pay }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="number"
            label="订单编号"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            width="150"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.row.id)"
                type="text"
                size="small"
                >移除</el-button
              >
              <el-button
                @click.native.prevent="showPurchaseDetailInfo(scope.row.id)"
                type="text"
                size="small"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-empty v-else :image-size="200"></el-empty>
      </el-tab-pane>
      <el-tab-pane label="我卖出的">
        <el-table
          v-if="orderData.sellData.length !== 0"
          :data="orderData.sellData"
          style="width: 100%"
        >
          <el-table-column prop="detail" label="订单详情" width="390">
            <template slot-scope="scope">
              <img :src="scope.row.imgUrlList[0]" alt style="width: 150px" />

              <div class="desc_span">{{ scope.row.desc }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="收货地址"
            width="220"
          ></el-table-column>
          <el-table-column label="金额/付款方式" width="150">
            <template slot-scope="scope">
              <div>
                <p>{{ scope.row.price }}</p>
                <p>{{ scope.row.pay }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建时间"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="number"
            label="订单编号"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            width="150"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.row.id)"
                type="text"
                size="small"
                >移除</el-button
              >
              <el-button
                @click.native.prevent="showSellDetailInfo(scope.row.id)"
                type="text"
                size="small"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-empty v-else :image-size="200"></el-empty>
      </el-tab-pane>
    </el-tabs>
    <!-- 买入详情弹窗 -->
    <el-dialog :visible.sync="purchaseDialogVisible" width="50%">
      <el-descriptions style="height: 35vh" :column="3" title="订单详情">
        <el-descriptions-item label="状态">{{
          showPurchaseDetail.state
        }}</el-descriptions-item>
        <el-descriptions-item label="金额">{{
          showPurchaseDetail.price
        }}</el-descriptions-item>
        <el-descriptions-item label="付款方式">{{
          showPurchaseDetail.pay
        }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{
          showPurchaseDetail.date
        }}</el-descriptions-item>
        <el-descriptions-item label="订单编号">{{
          showPurchaseDetail.number
        }}</el-descriptions-item>
        <el-descriptions-item label="收货地址">{{
          showPurchaseDetail.address
        }}</el-descriptions-item>
        <el-descriptions-item label="描述" span="3">{{
          showPurchaseDetail.desc
        }}</el-descriptions-item>
        <el-descriptions-item :span="3" label="图片">
          <div class="demo-image__preview">
            <el-image
              v-for="(item, index) in showPurchaseDetail.imgUrlList"
              :key="index"
              style="width: 100px; height: 100px; margin-right: 15px"
              :src="item"
              :preview-src-list="showPurchaseDetail.imgUrlList"
            ></el-image>
          </div>
        </el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button @click="purchaseDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="purchaseDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 卖出详情弹窗 -->
    <el-dialog :visible.sync="sellDialogVisible" width="50%">
      <el-descriptions style="height: 35vh" :column="3" title="订单详情">
        <el-descriptions-item label="状态">{{
          showSellDetail.state
        }}</el-descriptions-item>
        <el-descriptions-item label="金额">{{
          showSellDetail.price
        }}</el-descriptions-item>
        <el-descriptions-item label="付款方式">{{
          showSellDetail.pay
        }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{
          showSellDetail.date
        }}</el-descriptions-item>
        <el-descriptions-item label="订单编号">{{
          showSellDetail.number
        }}</el-descriptions-item>
        <el-descriptions-item label="收货地址">{{
          showSellDetail.address
        }}</el-descriptions-item>
        <el-descriptions-item label="描述" span="3">{{
          showSellDetail.desc
        }}</el-descriptions-item>
        <el-descriptions-item :span="3" label="图片" style="overflow: hidden">
          <div
            class="demo-image__preview"
            v-if="Array.isArray(showSellDetail.imgUrlList)"
          >
            <el-image
              v-for="(item, index) in showSellDetail.imgUrlList"
              :key="index"
              style="width: 100px; height: 100px; margin-right: 15px"
              :src="item"
              :preview-src-list="showSellDetail.imgUrlList"
            ></el-image>
          </div>
        </el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sellDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sellDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 15, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar";
import mockData from "./mockData";
import request from "@/network/http";
export default {
  components: {
    TabBar,
  },
  created() {
    // this.getOrderData();
  },
  data() {
    return {
      orderData: mockData,
      purchaseDialogVisible: false,
      sellDialogVisible: false,
      showPurchaseDetail: [],
      showSellDetail: [],
      currentPage: 1,
      pagesize: 10,
      total: 100,
    };
  },
  methods: {
    // 确保删除后再弹出消息
    deleteRow(params) {
      request
        .post("order/deleteOrder", {
          id: params,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.$notify({
              title: "成功",
              message: "这是一条成功的提示消息",
              type: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
          this.$notify.error({
            title: "错误",
            message: "这是一条错误的提示消息",
          });
        });
    },
    showPurchaseDetailInfo(id) {
      request.post("order/selectOrder", {
        id,
      });
      this.purchaseDialogVisible = true;
    },
    showSellDetailInfo(id) {
      this.sellDialogVisible = true;
      request.post("order/selectOrder", {
        id,
      });
    },
    getOrderData() {
      request.post("order/selectOrderList", {
        pageNumber: this.currentPage,
        pageSize: this.pagesize,
        property: "f50a2ab9717b4077a345021b749bd1c6",
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style scoped>
.card {
  width: 94%;
  margin-left: 3%;
  height: 80%;
  margin-top: 20px;
}
.desc_span {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  float: right;
  margin-right: 10%;
}
el-dialog {
  min-height: 40vh;
}
.pagination {
  margin: 2vw 0 0 3vw;
}
</style>