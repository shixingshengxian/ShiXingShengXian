<template>
  <div class="homecontent">
    <div data-v-2d8b6824 class="sell-point is-iphone5">
      <div data-v-2d8b6824 class="point-wrapper">
        <img
          data-v-2d8b6824
          src="http://pic2.34580.cn/group1/M00/54/14/wKgNYlw9pxGAbFW9AAAHDoo9uw0348.png"
          alt
          class="point-img"
        >0起送0运费
      </div>
      <div data-v-2d8b6824 class="point-wrapper">
        <img
          data-v-2d8b6824
          src="http://pic2.34580.cn/group1/M00/68/C7/wKgNY1w9N8mAGj-4AAADoUsJVko155.png"
          alt
          class="point-img"
        >晚到必赔
      </div>
      <div data-v-2d8b6824 class="point-wrapper">
        <img
          data-v-2d8b6824
          src="http://pic2.34580.cn/group1/M00/69/38/wKgNY1w9nFWAaONrAAAHmBntHvg444.png"
          alt
          class="point-img"
        >100%检
      </div>
      <div data-v-2d8b6824 class="point-wrapper">
        <img
          data-v-2d8b6824
          src="http://pic2.34580.cn/group1/M00/54/85/wKgNYlw-DF2AKwSaAAAG4pHr6xE740.png"
          alt
          class="point-img"
        >包退包赔
      </div>
    </div>

    <div class="banner-one">
      <img src="http://pic2.34580.cn/group1/M00/AC/01/wKgNYlz-vBGAVA7wAAx2LCBpM_8446.gif" alt>
    </div>
    <homeicon></homeicon>
    <swipestop></swipestop>

    <div class="line"></div>
    <div class="newpeople-img">
      <img src="http://static.34580.cn/cn/xinyonghuzhuanqu/shouye1116.png" alt>
    </div>

    <homelist></homelist>
  </div>
</template>

<script>
import homeicon from "./HomeIcon.vue";
import swipestop from "../AllCommon/SwipeStop.vue";
import homelist from "../Home/Homelist.vue";
export default {
  components: {
    homeicon,
    swipestop,
    homelist
  }
};
</script>

<style lang="scss" scoped>
.line {
  height: 10px;
  background-color: #eee;
}
.homecontent {
  .sell-point[data-v-2d8b6824] {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    color: #666;
    font-size: 0.75rem;
    background-color: #fff;
    padding: 0.5rem;
    padding-top: 0.75rem;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    .point-wrapper[data-v-2d8b6824] {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
    .point-img[data-v-2d8b6824] {
      width: 1.2rem;
      margin-right: 0.125rem;
    }
  }
  .banner-one {
    img {
      width: 100%;
      display: block;
    }
  }

  .newpeople-img {
    img {
      width: 100%;
    }
  }
}
</style>
