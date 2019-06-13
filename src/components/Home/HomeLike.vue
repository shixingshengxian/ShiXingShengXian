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
import Axios from "axios";
export default {
  data() {
    return {
      datalist: [],
      datalistimg: []
    };
  },
  props: ["bgcflag"],
  mounted() {
    this.getdatalist();
  },
  methods: {
    getdatalist() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
      ).then(data => {
        console.log(data.data);
        this.datalist = [...this.datalist, ...data.data];
        console.log(this.datalist);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.homelike {
  .title {
    height: 30px;
    width: 100%;
    line-height: 30px;
     background-color: #eee;
    i {
      color: red;
      font-size: 18px;
    }
  }
  .bgc {
    background-color: #eee;
    i {
      color: red;
      font-size: 18px;
    }
  }
  .products {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .inner {
      width: 48%;
      //   height: 200px;
      margin-bottom: 10px;
      img[lazy="loading"] {
        width: 100%;
        // height: 300px;
        margin: auto;
      }
      .title {
        font-size: 14px;
        line-height: 16px;
        height: 16px;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        background-color: #fff;
      }
      .price {
        color: red;
        font-size: 14px;
        line-height: 16px;
        height: 16px;
      }
    }
  }
}
</style>
