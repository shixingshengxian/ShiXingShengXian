<template>
  <mt-header fixed title="固定在顶部">
    <span @click="goback" slot="left">
      <mt-button icon="back">返回</mt-button>
    </span >
  </mt-header>
</template>


<script>
export default {

  methods: {
    goback(){
      this.$router.go(-1);
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-header {
  color: #000;
  background-color: #fff;
  height: 40px;
}
</style>
