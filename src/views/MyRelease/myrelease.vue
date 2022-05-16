<template>
  <div>
    <tab-bar></tab-bar>
    <div class="title">我的发布</div>
    <div class="card">
      <div class="block">
        <div class="goods_item" v-for="(item, id) in goods" :key="id">
          <img
            src="https://img0.baidu.com/it/u=3122136587,3938996930&fm=26&fmt=auto"
            alt=""
          />
          <div class="desc" @click="toGoodsDetail(item.id)">
            <p>{{ item.name }}</p>
            <ul>
              <li>{{ "浏览:" + item.liulan }}</li>
              <li>{{ "想要:" + item.xiangyao }}</li>
            </ul>
          </div>

          <div class="btn">
            <el-button type="danger" round @click="handleOffShelf(item)"
              >下架</el-button
            >
            <el-button type="primary" round @click="editId(item.id)"
              >编辑</el-button
            >
            <el-button type="primary" round @click="editId(item.id)"
              >详情</el-button
            >
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="收货地址"
      width="500px"
      :visible.sync="editDialogFormVisible"
    >
      <el-form :model="editDialogForm">
        <el-form-item label="类别" :label-width="formLabelWidth">
          <el-input v-model="editDialogForm.category"></el-input>
        </el-form-item>
        <el-form-item label="新旧程度" :label-width="formLabelWidth">
          <el-input
            v-model="editDialogForm.degree"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="转让价格" :label-width="formLabelWidth">
          <el-input
            v-model="editDialogForm.price"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            v-model="editDialogForm.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="详细描述" :label-width="formLabelWidth">
          <el-input v-model="editDialogForm.desc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEdit()">确 定</el-button>
      </div>
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
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      editDialogFormVisible: false,
      editDialogFormVisible: false,
      formLabelWidth: "120px",
      currentPage: 1,
      pagesize: 10,
      total: 100,
      id: "",
      goods: [
        {
          name: "任天堂 Nintendo Switch",
          liulan: "25",
          xiangyao: "34",
          id: 1,
        },
        {
          name: "任天堂 Nintendo Switch",
          liulan: "333",
          xiangyao: "333",
          id: 2,
        },
        {
          name: "任天堂 Nintendo Switch",
          liulan: "233",
          xiangyao: "545",
          id: 3,
        },
        {
          name: "任天堂 Nintendo Switch",
          liulan: "121",
          xiangyao: "232",
          id: 4,
        },
        {
          name: "任天堂 Nintendo Switch",
          liulan: "121",
          xiangyao: "232",
          id: 5,
        },
        {
          name: "任天堂 Nintendo Switch",
          liulan: "121",
          xiangyao: "232",
          id: 6,
        },
        {
          name: "任天堂 Nintendo Switch",
          liulan: "121",
          xiangyao: "232",
          id: 7,
        },
      ],
      editDialogForm: {
        category: "",
        degree: "",
        desc: "",
        title: "",
        price: "",
      },
    };
  },
  methods: {
    handleOffShelf(e) {
      console.log(e);
      this.$confirm("您真的要下架该商品吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then((res) => {
          if (res.status === "success") {
            this.$message({
              type: "success",
              message: "下架成功!",
            });
          } else {
            this.$message({
              type: "erroe",
              message: "下架失败!",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消下架",
          });
        });
    },
    editId(e) {
      this.id = e;
      this.editDialogFormVisible = true;
    },
    handleEdit() {
      console.log(this.id);
      this.editDialogFormVisible = false;
    },
    toGoodsDetail(id) {
      this.$router.push(`/goodsdetail/${id}`);
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
.title {
  margin-left: 15%;
  margin-top: 2%;
  font-size: 20px;
  text-align: center;
  font-family: 宋体;
  width: 120px;
  height: 30px;
  font-weight: bold;
  color: yellow;
  background-color: rgb(43, 40, 40);
}

.card {
  width: 70%;
  margin-left: 15%;
  margin-top: 1%;
}

.goods_item {
  width: 94%;
  height: 110px;
  background-color: rgb(245, 245, 245);
  margin-left: 3%;
  margin-top: 2%;
  border-radius: 10px;
}

.goods_item img {
  width: 90px;
  height: 90px;
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 2%;
}

.goods_item .desc {
  margin-left: 17%;
  margin-top: -6.5%;
  width: 50%;
  cursor: pointer;
}

.desc p {
  font-size: 15px;
}

.desc ul {
  display: flex;
  margin-top: 3%;
  width: 30%;
}

.desc ul li {
  flex: 1;
}

.btn {
  margin-left: 70%;
  margin-top: -45px;
  width: 30%;
}
.pagination {
  margin: 2vw 0 0 17vw;
}
</style>