<template>
  <div>
    <tab-bar />
    <div class="message__head">
      <div class="head--img">
        <img :src="renderData.userImg" alt="userImg" />
      </div>

      <div class="head--userName">{{ renderData.userName }}</div>
      <div class="head--school">{{ renderData.school }}</div>
      <div class="head--total">
        {{ `共有${renderData.comments.length}条留言` }}
      </div>
    </div>
    <div class="message__bg">
      <div
        class="message__comment"
        v-for="item in renderData.comments"
        :key="item.id"
      >
        <div class="comment--img">
          <img :src="item.commentUserImg" alt="commentUserImg" />
        </div>
        <div class="comment--userName">{{ item.commentUser }}</div>
        <div class="comment--school">
          <el-tag type="success" size="mini">{{
            item.commentUserSchool
          }}</el-tag>
        </div>
        <div class="comment--button">
          <el-button size="middle" type="text" @click="showDialog(item)"
            >回复</el-button
          >
        </div>
        <div class="comment--content">{{ item.commentContext }}</div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <el-form :model="form"
        ><el-form-item :label="'回复：' + form.replyToUser"
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
import TabBar from "@/components/tabbar/tabbar";
import { mockData } from "./mockData";
// import request from '@/network/http'
export default {
  name: "message",
  components: {
    TabBar,
  },
  created() {
    // this.renderData = mockData;
    console.log("111", this.$store.getters.getValue);
  },
  data() {
    return {
      renderData: mockData,
      dialogVisible: false,
      form: {
        replyMessage: "",
        replyToUser: "",
      },
    };
  },
  methods: {
    showDialog(item) {
      this.form.replyToUser = item.commentUser;
      this.dialogVisible = true;
      console.log(item);
    },
    toReply() {
      console.log(this.form);
      this.$message({
        type: "success",
        message: "回复成功",
      });
      this.dialogVisible = false;
      this.form = {};
    },
  },
};
</script>

<style scoped>
.message__head {
  position: absolute;
  top: 120px;
  width: 220px;
  text-align: center;
  font-size: 18px;
  line-height: 3em;
}
.message__bg {
  margin: 20px 0 0 150px;
}
.head--img {
  width: 150px;
  height: 150px;
  margin-left: 35px;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.message__comment {
  position: relative;
  width: 70%;
  margin: 20px 0 20px 200px;
  height: 150px;
  background-color: rgb(252, 244, 244);
  border-radius: 20px;
}
.comment--img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 10px;
  top: 10px;
}
.comment--img img {
  width: 100%;
  height: 100%;
}
.comment--userName {
  position: absolute;
  left: 150px;
  top: 20px;
}
.comment--school {
  position: absolute;
  left: 300px;
  top: 20px;
}
.comment--button {
  position: absolute;
  right: 20px;
  top: 10px;
}
.comment--content {
  position: absolute;
  left: 150px;
  top: 50px;
  height: 90px;
  width: 80%;
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
  text-indent: 2em;
  font-size: 14px;
}
</style>