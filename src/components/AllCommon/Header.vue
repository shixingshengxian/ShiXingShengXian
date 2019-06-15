<template>
  <div title="固定在顶部" class="top-fixed">
    <div class="l" v-show="topflag" @click="goback">
      <i class="iconfont">&#xe8b5;</i>
      <p>返回</p>
    </div>
    <p class="m">固定在顶部111</p>
    <i class="iconfont">&#xe893;</i>
  </div>
</template>


<script>
export default {
  data() {
    return {
      topflag: true
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>


<style lang="scss" scoped>
.top-fixed {
  display: flex;
  height: 2.5rem;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.625rem;
  .l {
    display: flex;
    font-size: 0.875rem;
    align-items: center;
  }
  .m {
    flex: 1;
  }
}
</style>
