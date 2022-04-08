<template>
  <div>
    <tab-bar></tab-bar>
    <el-card class="card">
      <div class="current_address">
        <p class="current_title">确认收货地址</p>
        <div class="address_container" v-popover:popover >
          <div>收货人:{{ '四川眉山（张同学）' }}</div>
          <div>详细地址:{{ '四川眉山（张同学）四川眉山（张同学四川眉山（张同学22222222' }}</div>
          <div>TEL:{{ '四川眉山（张同学）' }}</div>
        </div>
      </div>
      <div class="select_another" @click="addressVisibility=true" ><el-button>选择其他收货地址</el-button></div>
    </el-card>
    
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/tabbar"
export default {
  components: {
    TabBar
  },
  data() {
    return {
      active: 1,
      options,
      addressForm: {
        receivePeople: '',
        locationAddress: '',
        detailAddress: ''
      },
      addressVisibility:false
    }
  },
  created() {

  },
  methods: {
    show(){
      console.log('1');
      this.addressVisibility=false
    }
  }
}
</script>

<style scoped >
.card {
  width: 50%;
  margin-left: 25%;
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
  margin: 10px 0 0 3em;
}
.address_container div {
  line-height: 2em;
  font-size: 16px;
  width: 100%;
  height: 30px;
  overflow: hidden;
  margin-left: -1em;
}
.select_another{
  margin-top: 10px;
}
</style>