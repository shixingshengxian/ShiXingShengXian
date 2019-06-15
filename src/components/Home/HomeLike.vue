<template>
  <div class="homelike">
    <div :class="{title:true,bgc:bgcflag}">
      <i class="iconfont">&#xe872;</i> 猜你喜欢
    </div>
    <!-- <div class="products">
      <div class="inner" v-for="item in datalist" :key="item.pid">
        <img :v-lazy="item.img" alt>
        <div class="title">{{item.title}}</div>
        <div class="price">{{item.priceandunit}}</div>
      </div>
    </div>-->
    <ul class="products">
      <router-link to="/goodslist" tag="li" v-for="item in datalist" :key="item.pid" class="inner">
        <img v-lazy="item.img">
        <div class="title">{{item.title}}</div>
        <div class="price">{{item.priceandunit}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: this.$store.state.getdatalist,
      datalistimg: []
    };
  },
  props: ["bgcflag"],
  mounted() {
    // this.getdatalist();
  },
  methods: {
    // getdatalist() {
    //   Axios.get(
    //     "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
    //   ).then(data => {
    //     // console.log(data.data);
    //     this.datalist = [...this.datalist, ...data.data];
    //     // console.log(this.datalist);
    //   });
    // }
  }
};
</script>
<style lang="scss" scoped>
.homelike {
  .title {
    height: 1.875rem;
    width: 100%;
    line-height: 1.875rem;
     background-color: #eee;
    i {
      color: red;
      font-size: 1.125rem;
    }
  }
  .bgc {
    background-color: #eee;
    i {
      color: red;
      font-size: 1.125rem;
    }
  }
  .products {
    padding: 0 0.625rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .inner {
      width: 48%;
      //   height: 12.5rem;
      margin-bottom: 0.625rem;
      img[lazy="loading"] {
        width: 100%;
        // height: 18.75rem;
        margin: auto;
      }
      .title {
        font-size: 0.875rem;
        line-height: 1rem;
        height: 1rem;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        background-color: #fff;
      }
      .price {
        color: red;
        font-size: 0.875rem;
        line-height: 1rem;
        height: 1rem;
      }
    }
  }
}
</style>
