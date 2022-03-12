<template>
  <div>
    <p>{{id}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: {
        type: Number,
      },
    };
  },
  methods: {},
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },
};
</script>
<style scoped>
</style>