<template>
  <div>
    <tab-bar></tab-bar>
    <el-steps :active="active" finish-status="success" simple>
      <el-step title="步骤 1" icon="el-icon-edit">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{ '列表内容 ' + o }}</div>
        </el-card>
      </el-step>
      <el-step title="步骤 2" icon="el-icon-upload"><div v-for="o in 4" :key="o" class="text item">{{ '列表内容 ' + o }}</div></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
    </el-steps>
    <el-button @click="nextStep">下一步</el-button>
    <el-button @click="preStep">上一步</el-button>
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
      active: 1
    }
  },
  methods: {
    nextStep() {
      this.active < 3 ? this.active++ : 3
    },
    preStep() {
      this.active > 1 ? this.active-- : 1
    }
  }
}
</script>

<style>
</style>