<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="" alt="">1</mt-swipe-item>
      </mt-swipe>
  </div>
</template>


<script>

export default {};
</script>



<style lang="scss" scoped>
.swipe{
  padding: 0 10px;
    height: 170px;
    overflow: hidden;
    img{
        width: 100%;
        border-radius: 5px;
    }
}
</style>
