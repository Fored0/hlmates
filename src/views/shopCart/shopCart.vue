<template>
  <div>
    <tab-bar />
    <div class="cart-group">
      <div class="sellect-all">
        <div class="radio">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
        </div>

        <div class="price">单价</div>
        <div class="quantity">数量</div>
      </div>
      <div class="cart-main">
        <div
          class="product-item"
          v-for="(item, index) in cartList"
          :key="index"
        >
          <el-checkbox
            v-model="item.checked"
            @change="checkedChange(item.id)"
          ></el-checkbox>
          <div class="product-detail">
            <div class="img">
              <img :src="item.fileId" />
            </div>
            <div class="content">
              <div class="name">{{ item.title }}</div>
              <div class="specification">
                {{ item.type === 0 ? "数码产品" : "鞋服" }}
              </div>
            </div>
          </div>
          <div class="product-price">￥{{ item.price }}</div>
          <div class="product-quantity">
            <el-input-number
              v-model="item.num"
              size="small"
              @change="qtyChange(item)"
            ></el-input-number>
          </div>
        </div>
      </div>
      <div class="cart-subtotal">
        <div class="radio">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
        </div>
        <!-- <div class="pagination">
          <el-pagination
            :page-sizes="[10, 15, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div> -->
        <div class="total">
          合计 : <span style="color: #e33333">${{ totalPrice }}</span>
        </div>
        <div class="btn">
          <el-button type="primary" @click="toPay()">去支付</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar";
import request from "@/network/http.js";
export default {
  name: "shopCart",
  components: {
    TabBar,
  },
  data() {
    return {
      quantity: 4,
      checkAll: false,
      isIndeterminate: true,
      currentPage: 1,
      pagesize: 10,
      total: 100,
      totalPrice: 0,
      cartList: [],
      cart: [],
    };
  },
  mounted() {
    this.setCart();
  },
  created() {
    this.getCartData();
  },
  methods: {
    getCartData() {
      request
        .post("cart/selectCartByUserId", {
          pageNumber: 1,
          pageSize: 100,
          property: JSON.parse(localStorage.getItem("userInfo")).id,
        })
        .then((res) => {
          console.log(res);
          const { list } = res.data.data;
          this.cartList = list;
        });
    },
    //全选
    handleCheckAllChange(val) {
      this.isIndeterminate = false;
      if (val == false) {
        for (let i in this.cartList) {
          this.cartList[i].checked = false;
        }
      } else {
        for (let i in this.cartList) {
          this.cartList[i].checked = true;
        }
      }
      this.setCart();
    },
    //数量改变
    qtyChange(value) {
      console.log(value);
      console.log(this.cartList);
      this.setCart();
    },
    //单选框改变
    checkedChange(id) {
      console.log(id);
      this.checkAll = this.cartList.every(function (obj) {
        return obj.checked == true;
      });
      this.isIndeterminate = false;
      this.setCart();
    },
    //购物车状态
    setCart() {
      let totalPrice = 0;
      let allChecked = true;
      this.cartList.forEach((v, i) => {
        if (v.checked) {
          totalPrice += v.num * v.price;
        } else {
          allChecked = false;
        }
      });
      this.allChecked = allChecked;
      this.totalPrice = totalPrice;
    },
    toPay() {
      console.log(this.cartList);
      this.$message({
        type: "success",
        message: "支付成功",
      });
    },
  },
};
</script>

<style scoped>
.cart-group {
  margin-top: 30px;
  padding-bottom: 60px;
}
.sellect-all {
  background: white;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.radio {
  width: 640px;
}
.price {
  width: 220px;
}
.quantity {
  width: 200px;
}
.cart-main {
  padding: 20px;
  background: white;
}
.product-item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e3e3e3;
}
.product-detail {
  width: 550px;
  height: 100%;
  margin-left: 10px;
  padding: 0 40px 0 20px;
  display: flex;
}
.img {
  width: 100px;
  height: 100px;
}
img {
  width: 100px;
  height: 100px;
}
.content {
  margin-left: 30px;
  width: 450px;
}
.name {
  font-size: 14px;
  color: black;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.specification {
  font-size: 14px;
  color: #666;
  margin-top: 20px;
}
.product-price {
  width: 220px;
  height: 100%;
  font-size: 16px;
  color: #e33333;
}

.product-quantity {
  width: 220px;
  height: 100%;
}
.cart-subtotal {
  height: 60px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  background: white;
  padding-left: 20px;
  position: relative;
}
.btn {
  position: absolute;
  right: 0;
  padding: 0;
  width: 130px;
  height: 60px;
  font-size: 16px;
  text-align: center;
  line-height: 60px;
}
.btn:hover {
  cursor: pointer;
}
</style>
