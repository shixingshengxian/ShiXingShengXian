<template>
  <div class="home">
    <headers></headers>
    <swipe></swipe>
    <homecontent></homecontent>
    <homelike></homelike>
  </div>
</template>

<script>
import headers from "../AllCommon/Header.vue";
import swipe from "../AllCommon/Swipe.vue";
import homecontent from "../Home/HomeContent.vue";
import homelike from "../Home/HomeLike.vue";
export default {
  data() {
    return {};
  },
  components: {
    headers,
    swipe,
    homecontent,
    homelike
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 50px;
}
</style>
