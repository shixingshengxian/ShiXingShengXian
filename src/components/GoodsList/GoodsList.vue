<template>
  <div id="shopslist">
    <div>
      <div @click="toshop(item.pid)" class="p-box" v-for="item in datalist" :key="item.pid">
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
      </div>
    </div>
  </div>
</template>


<script>
// import Axios from "axios";
// import goodsheader from "../AllCommon/Header.vue";
export default {
  data() {
    return {
      datalist: this.$store.state.getdatalist
    };
  },
  created() {
    // this.getdatalist();
    this.$store.commit("getDataList");
  },
  components: {
    // goodsheader
  },
  methods: {
    // getdatalist() {
    //   Axios.get(
    //     "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
    //   ).then(data => {
    //     this.datalist = [...this.datalist, ...data.data];
    //   });
    // },
    toshop(id) {
      // console.log(id);
      // this.$router.push({path:'/goodslist/goodsdetail/'+id})
      this.$router.push({ name: "goodsdetail", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
#shopslist {
  display: flex;
  flex-direction: column;
  .p-box {
    padding: 0.625rem;
    margin-bottom: 0.625rem;
    display: flex;
    // justify-content: left;
    border-bottom: 0.0625rem solid #eee;
    height: 100px;

    .l {
      width: 5.625rem;
      height: 5.625rem !important;
      img {
        display: block;
        width: 5.625rem !important;
        height: 5.625rem !important;
      }
    }
    .m {
      margin-left: 0.625rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      height: 5.625rem;
      .title {
        text-align: left;
      }
      .products-b {
        display: flex;
        justify-content: space-between;

        .price {
          color: red !important;
          font-size: 0.875rem;
        }
        .unit {
          font-size: 0.625rem;
          color: #999;
        }
        .gobuy {
          border: 0.0625rem solid #cccccc;
          text-align: center;
          align-items: center;
          line-height: 2.1875rem;
          width: 4.6875rem;
          border-radius: 1.5625rem;
          color: #fff;
          background: linear-gradient(90deg, #ff6346, #ff3f57);
        }
      }
    }
  }
}
</style>
