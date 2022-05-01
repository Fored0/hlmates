<template>
  <div>
    <tab-bar></tab-bar>
    <div class="content">
      <div class="top">
        <div class="title">{{ detailData.title }}</div>
        <div>
          <div class="show_img"><img :src="detailData.img" alt="" /></div>
          <div class="good_detail">
            <div class="current_price">
              现价:<span>￥{{ detailData.currentPrice }}</span>
            </div>
            <div class="address">所在区域:{{ detailData.address }}</div>
            <div class="tags">
              <div class="item_tag" v-for="item in detailData.tags" :key="item">
                <el-tag size="mini" type="warning">
                  {{ item }}
                </el-tag>
              </div>
            </div>
            <br />
            <div class="concat_btns">
              <button @click="dialogVisible = true" class="connect_btn">
                给卖家留言
              </button>
              <button @click="toPay" class="buy_btn">我要购买</button>
              <button @click="joinShopCart" class="jionShopCart_btn">
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="center_desc">
        <div class="divider">
          <div class="vertical_divider"></div>
          <div class="desc_text">
            物品描述<span class="total_comment">{{
              "共有" + totalComment + "条评论"
            }}</span>
          </div>
        </div>
        <div
          class="desc"
          v-for="(item, index) in detailData.description.slice(0, 3)"
          :key="index"
        >
          <div class="head_img">
            <el-avatar :src="item.imgUrl"></el-avatar>
          </div>
          <div class="desc_people">
            {{ item.descPeople }} <span>有话说:</span>
          </div>
          <div class="hide_sanjiao"></div>
          <div class="desc_content">{{ item.content }}</div>
        </div>
      </div>
      <div class="bottom_img">
        <div class="vertical_divider"></div>
        <div class="desc_text">
          物品描述<span class="total_comment">{{
            "共有" + totalPicture + "张图片"
          }}</span>
        </div>
        <div class="goods_img">
          <div
            class="item_img"
            v-for="(item, index) in detailData.goodsImgs.slice(0, 5)"
            :key="index"
          >
            <img :src="item" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <el-form :model="form"
        ><el-form-item :label="'给' + detailData.user + '留言'"
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="form.replyMessage"
          >
          </el-input></el-form-item
      ></el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toReply()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import TabBar from "components/tabbar/tabbar.vue";
import mockData from "./mockData";

export default {
  components: {
    TabBar,
  },
  data() {
    return {
      id: {
        type: Number,
      },
      detailData: mockData,
      totalComment: 0,
      totalPicture: 0,
      dialogVisible: false,
      form: {
        replyMessage: "",
      },
    };
  },
  methods: {
    toReply() {
      this.dialogVisible = false;
    },
    toPay(params) {
      this.$router.push("/placeorder");
    },
    joinShopCart() {},
  },
  created() {
    this.id = this.$route.params.id;
    this.totalComment = Array.isArray(this.detailData.description)
      ? this.detailData.description.length
      : 0;
    this.totalPicture = Array.isArray(this.detailData.goodsImgs)
      ? this.detailData.goodsImgs.length
      : 0;
    console.log(this.id);
  },
};
</script>
<style scoped>
.content {
  width: 70%;
  margin-left: 15%;
  border: 1px solid silver;
  margin-bottom: 20px;
  height: 1000px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 20px 20px;
}
.show_img {
  width: 250px;
  height: 250px;
  border: 1px solid silver;
  border-left: none;
}
.show_img img {
  width: 230px;
  height: 200px;
  margin: 25px 10px 0 10px;
}
.good_detail {
  float: left;
  margin-top: -250px;
  margin-left: 300px;
}
.current_price {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
}
.current_price span {
  color: red;
}
.address {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}
.tags {
  width: 300px;
  display: inline-flex;
  margin-bottom: 20px;
}
.item_tag {
  flex: 1;
  margin-right: 20px;
}
.concat_btns {
  width: 400px;
}
.concat_btns button {
  width: 80px;
  height: 30px;
  margin-right: 120px;
}
.connect_btn {
  background-color: #000;
  color: rgb(255, 174, 0);
  border: none;
  font-size: 14px;
}
.buy_btn {
  background-color: #fff;
  color: red;
  font-size: 14px;
  border: 1px solid red;
}
.jionShopCart_btn {
  margin-top: 20px;
  background-color: red;
  border: 0;
  color: white;
}
.center_desc {
  margin-top: 20px;
}
.divider {
  width: 100%;
  height: 10px;
}
.vertical_divider {
  width: 8px;
  height: 40px;
  background-color: red;
  margin-left: 20px;
}
.desc_text {
  float: left;
  margin-top: -35px;
  margin-left: 40px;
  font-weight: bold;
  font-size: 16px;
}
.desc {
  margin: 30px 0 0 40px;
}
.total_comment {
  margin-left: 20px;
}
.desc_people {
  float: left;
  margin-top: -35px;
  margin-left: 50px;
  font-weight: bold;
  font-size: 14px;
}
.desc_people span {
  font-weight: normal;
  font-size: 14px;
}
.desc_content {
  width: 520px;
  border: 1px solid rgb(226, 220, 220);
  text-align: left;
  text-indent: -15px;
  line-height: 20px;
  font-weight: 300;
  margin-left: 40px;
  background-color: rgb(241, 238, 238);
}
.hide_sanjiao {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 30px solid rgb(241, 238, 238);
  z-index: 99;
  margin-left: 60px;
  float: left;
  margin-top: -15px;
}
.bottom_img {
  margin-top: 20px;
}
.goods_img {
  display: grid;
  grid-auto-columns: 3;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 200px;
  cursor: pointer;
}
.item_img img {
  margin: 20px;
  width: 170px;
  height: 170px;
}
</style>