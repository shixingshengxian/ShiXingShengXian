<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img :src="datalist.img" alt="">1</mt-swipe-item>
      </mt-swipe>
  </div>
</template>


<script>

export default {
  data() {
    return {
      
      }
  },
  props: ["datalist"]
};
</script>



<style lang="scss" scoped>
.swipe{
  padding: 0 0.625rem;
    // height: 250px;
    // overflow: hidden;
    img{
        width: 100%;height: 100%;
        display: block;
        border-radius: 0.3125rem;
    }
}
</style>
