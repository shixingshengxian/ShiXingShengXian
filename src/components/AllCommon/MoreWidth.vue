<template>
  <div class="cg-longdiv">
    <ul class="cg-longul">
      <li class="cg-longli">
        <img src="http://picpro-sz.34580.com/sh/ImageUrl/507401/160.jpeg" alt>
        <p class="cg-longtitle">世界上最最最最好吃</p>
        <div class="cg-longfullegg">
          <span>满50-30</span>
        </div>

        <div class="cg-longprice" style="color: rgb(255, 56, 52);">
          <div>
            <div>¥17.90</div>
            <div class="cg-longunit">盒</div>
          </div>
          <div class="cg-longcart iconfont">&#xe89f;</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    getdatalist(){
      
    }
  },
};
</script>

<style lang="scss" scoped>
.cg-longdiv::-webkit-scrollbar {
  display: none;
}
.cg-longdiv {
  width: 100%;
  overflow-x: auto;

  .cg-longul {
    // background-color: #ccc;
    width: 1200px;
    display: flex;
    justify-content: left;
    padding: 0 10px;
    .cg-longli {
      width: 100px;

      img {
        width: 100%;
      }
      .cg-longtitle {
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        font-size: 12px;
      }
      .cg-longfullegg {
        span {
          text-overflow: ellipsis;
          padding: 1px 0.2rem;
          border-radius: 1rem;
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          line-height: 1;
          color: #ff550f;
          font-size: 0.6875rem;
          border: 1px solid #ff550f;
          background-color: #fff;
          max-width: 100%;
        }
      }
      .cg-longprice {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        align-items: flex-start;
        .cg-longunit {
          color: #000;
          text-align: left;
        }
        .cg-longcart {
          border: 1px solid #eee;
          border-radius: 50%;
          height: 20px;
          width: 20px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
