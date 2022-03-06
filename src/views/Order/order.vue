<template>
  <div>
    <!--  -->
    <tab-bar></tab-bar>
    <!--  -->
    <el-tabs type="border-card" stretch class="card">
      <el-tab-pane label="我买入的">
        <el-table
          :data="tableData"
          height="550"
          border
          style="width: 100%"
          stripe
        >
          <el-table-column prop="detail" label="订单详情" width="390">
            <template slot-scope="scope">
              <img
                src="https://img0.baidu.com/it/u=2292808981,2192611081&fm=26&fmt=auto"
                alt=""
                style="width: 150px"
              />
              <div class="desc_span">{{ scope.row.desc }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="收货地址" width="160">
          </el-table-column>
          <el-table-column label="金额/付款方式" width="160">
            <template slot-scope="scope">
              <div>
                <p>{{ scope.row.price }}</p>

                <p>{{ scope.row.pay }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="创建时间" width="160">
          </el-table-column>
          <el-table-column prop="number" label="订单编号" width="160">
          </el-table-column>
          <el-table-column prop="state" label="状态" width="160">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table></el-tab-pane
      >
      <el-tab-pane label="我卖出的">我卖出的</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          desc: "举头望明月，低头思故乡",
          state: "已支付订单",
          number: "126863281",
          price: "182.5",
          pay: "微信支付",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          desc: "举头望明月，低头思故乡",
          state: "已支付订单",
          number: "126863281",
          price: "182.5",
          pay: "微信支付",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          desc: "举头望明月，低头思故乡",
          state: "已支付订单",
          number: "126863281",
          price: "182.5",
          pay: "微信支付",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          desc: "举头望明月，低头思故乡",
          state: "未支付订单",
          number: "126863281",
          price: "182.5",
          pay: "微信支付",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          desc: "举头望明月，低头思故乡",
          state: "未支付订单",
          number: "126863281",
          price: "182.5",
          pay: "微信支付",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          desc: "举头望明月，低头思故乡",
          state: "未支付订单",
          number: "126863281",
          price: "182.5",
          pay: "微信支付",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          desc: "举头望明月，低头思故乡",
          state: "未支付订单",
          number: "126863281",
          price: "182.5",
          pay: "微信支付",
        },
      ],
    };
  },
  methods:{
    deleteRow(){
      
    }
  }
};
</script>

<style scoped>
.card {
  width: 94%;
  margin-left: 3%;
  height: 80%;
}
.desc_span {
  margin-left: 50%;
  margin-top: -15%;
}
</style>