<template>
  <div>
    <tab-bar />
    <div class="search" v-if="searchData.length !== 0 && !isLoading">
      <div class="search__title">搜索结果如下：</div>
      <div class="search__input--container">
        <el-input
          placeholder="请输入内容"
          v-model="searchInput"
          class="search__input"
          clearable
        ></el-input>
        <el-button
          class="btn"
          icon="el-icon-search"
          @click="handleSearch"
        ></el-button>
      </div>
      <ul class="search__container">
        <li
          v-for="item in searchData"
          :key="item.id"
          class="show__search"
          @click="todetail(item.id)"
        >
          <img class="show__search--img" :src="item.img" alt="img" />
          <p class="show__search--title">
            <span class="show__search--base">{{
              item.degree + item.type
            }}</span>
            <span class="show__search--price">{{ "￥" + item.price }}</span>
          </p>
          <p class="show__search--desc">{{ item.description }}</p>
        </li>
      </ul>
    </div>
    <el-empty
      v-if="searchData.length === 0"
      description="暂无相关商品数据！试试输入其他关键字搜索其他商品"
    ></el-empty>
    <el-skeleton v-if="isLoading" :rows="6" animated />
    <bottom-bar />
  </div>
</template>

<script>
import TabBar from "components/tabbar/tabbar.vue";
import BottomBar from "components/bottombar/bottombar.vue";
import mockData from "./mockData";
import request from "@/network/http.js";
export default {
  name: "Serach",
  components: {
    TabBar,
    BottomBar,
  },
  data() {
    return {
      searchData: mockData,
      searchInput: "",
      isLoading: false,
    };
  },
  created() {
    console.log("params", this.$router.currentRoute.params.searchKey);
  },
  methods: {
    todetail(id) {
      this.$router.push(`/goodsdetail/${id}`);
    },
    handleSearch() {
      console.log(this.searchInput);
    },
  },
};
</script>

<style scoped>
.search {
  margin-left: 3vw;
}
.search__input--container {
  width: 260px;
  position: absolute;
  right: 20px;
  top: 80px;
}
.search__input {
  width: 200px;
}
.search__container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
  cursor: pointer;
}
.search__title {
  font-size: 16px;
  margin: 20px 0 20px 0;
  color: red;
}
.show__search {
  width: 200px;
  height: 190px;
  font-size: 14px;
}
.show__search:hover {
  color: blue;
}
.show__search--img {
  width: 200px;
  height: 125px;
  border-radius: 10px;
}
.show__search--title {
  width: 200px;
  display: flex;
}
.show__search--desc {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
.show__search--base {
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
.show__search--price {
  width: 80px;
}
</style>