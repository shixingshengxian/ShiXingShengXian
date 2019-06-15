<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/AC/2D/wKgNYlz_bKeAOt7CAACAU6XcuAU155.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/AB/E5/wKgNYlz-lviAYItHAAEDX340zDg175.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://pic2.34580.cn/group1/M00/BD/F7/wKgNY1z4coaAdCxRAAFGnd_rlsM348.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>


<script>

export default {};
</script>



<style lang="scss" scoped>
.swipe{
  padding: 0 0.625rem;
    height: 10.625rem;
    overflow: hidden;
    img{
        width: 100%;
        border-radius: 0.3125rem;
    }
}
</style>
