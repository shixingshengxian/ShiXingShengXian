<template>
  <div class="goodslist">
    <goodsheader class="goodsheader"></goodsheader>
    <router-link to="/goodslist/goodsdetail" class="products" v-for="item in datalist" :key="item.pid">
      <div class="l">
        <img :src="item.img" alt>
      </div>
      <div class="m">
        <p class="title">{{item.title}}</p>
        <div class="products-b">
          <div class="msg">
            <p class="price">￥{{item.price}}</p>
            <del class="unit">￥{{~~item.price+2}}{{item.priceunit}}</del>
          </div>
          <div class="gobuy">马上购</div>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
import Axios from "axios";
import goodsheader from "../AllCommon/Header.vue";
export default {
  data() {
    return {
      datalist: []
    };
  },
  created() {
    this.getdatalist();
  },
  components: {
    goodsheader
  },
  methods: {
    getdatalist() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
      ).then(data => {
        this.datalist = [...this.datalist, ...data.data];
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.goodslist {
  .goodsheader {
    background: linear-gradient(90deg, #ff6346, #ff3f57);
  }
  padding-top: 50px;
  .products {
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: left;
    border-bottom: 1px solid #eee;
    .l {
      width: 90px;
      img {
        width: 100%;
      }
    }
    .m {
      margin-left: 10px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      .title {
        text-align: left;
      }
      .products-b {
        display: flex;
        justify-content: space-between;

        .price {
          color: red;
          font-size: 14px;
        }
        .unit {
          font-size: 10px;
          color:#999;
        }
        .gobuy {
          border: 1px solid #cccccc;
          text-align: center;
          align-items: center;
          line-height: 35px;
          width: 75px;
          border-radius: 25px;
          color: #fff;
          background: linear-gradient(90deg, #ff6346, #ff3f57);
        }
      }
    }
  }
}
</style>
