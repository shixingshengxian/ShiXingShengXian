<template>
  <div class="goodsdetail">
    <!-- <goodsheader class="goodsheader"></goodsheader> -->
    <div class="goodsdetail-box">
      <swipe class="swipe" :datalist="datalist"></swipe>

      <div class="goodsinfo">
        <div class="title">{{datalist.title}}</div>
        <div class="price">
          <big class="nowprice">￥{{datalist.price}}{{datalist.priceunit}}</big>
          <div class="nowcolor">限时抢购</div>
        </div>
        <div class="oprice">
          <del class="oldprice">￥{{~~datalist.price+2}}{{datalist.priceunit}}</del>
          <div class="sell">已售{{datalist.pid}}</div>
        </div>
        <div class="b-title">
          <div class>真正的优惠，你值得拥有</div>
          <i class="iconfont">&#xe8a2;</i>
        </div>
      </div>
      <div class="line"></div>
      <div class="product-other">
        <div class="activity">
          <span class="tag">促销</span>
          <div class="activity-container">
            <div>
              <div class="activity-item">
                <span class="type-name">换购</span>
                <span class="description">【{{datalist.title}}】满3件可换购3件</span>
              </div>
            </div>
            <div>
              <div class="activity-item">
                <span class="type-name">换购</span>
                <span class="description">【全场】购物满49元可换购1件</span>
              </div>
            </div>
          </div>
          <div class="more">
            <i class="iconfont">&#xe8a2;</i>
          </div>
        </div>
        <div class="service">
          <div class="tag">服务</div>
          <div class="service-info">
            <div class="list">
              <div>
                <!---->
                轻松退
              </div>
              <div>
                <span>&nbsp;·</span> 站点自提
              </div>
              <div>
                <span>&nbsp;·</span> 全程冷链
              </div>
              <div>
                <span>&nbsp;·</span> 食材质检
              </div>
              <div>
                <span>&nbsp;·</span> 全场免运费
              </div>
            </div>
            <!---->
          </div>
          <div class="more">
            <i class="iconfont">&#xe8a2;</i>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="message">
        <div class="msg-t">
          <span class="l">商品评价</span>
          <span class="r">
            <p>好评99.8%</p>
            <i class="iconfont">&#xe8a2;</i>
          </span>
        </div>

        <div class="msg-b">
          <div class="li-icon">
            <img src alt>
          </div>
          <div class="li-text">
            <P>一位头像都没有的小白</P>
            <P>东西挺好次的,商家也挺不错的，价格公道，下次还来，凑够十五字</P>
          </div>
        </div>
      </div>
    </div>
    <div class="shopcart">
      <div class="gotobuy">立即购买</div>
      <div class="gotocart">加入购物车</div>
    </div>
    <!-- <homelike :bgcflag="bgcflag"></homelike> -->
  </div>
</template>


<script>
// import goodsheader from "../AllCommon/Header.vue";
import Axios from "axios";
import swipe from "../AllCommon/Swipe2.vue";
// import homelike from "../Home/HomeLike.vue";
export default {
  data() {
    return {
      bgcflag: true,
      datalist: [],
      id: this.$route.params.id
    };
  },
  components: {
    // goodsheader,
    swipe,
    // homelike
  },
  created() {},
  mounted() {
    this.getdatalist();
  },
  methods: {
    getdatalist() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
      ).then(data => {
        // this.datalist = [...this.datalist, ...data.data];
        let arr = data.data;
        for (var item of arr) {
          if (item.pid == this.id) {
            this.datalist = item;
            // console.log(item);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsdetail {
  // padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  .goodsdetail-box {
    flex: 1;
  }
  .goodsheader {
    height: 40px;
    // background: linear-gradient(90deg, #40b2eb, #66ccff);
  }
  .swipe {
    height: 250px;
    // background-color: #000;
  }
  .goodsinfo {
    padding: 0.625rem;
    display: flex;
    flex-direction: column;
    .title {
      color: #000;
      margin-bottom: 8px;
    }
    .price {
      margin: 10px 0 5px 0;
      display: flex;
      justify-content: left;
      align-items: center;
      .nowprice {
        color: red;
      }
      .nowcolor {
        border: 0.0625rem solid #cccccc;
        text-align: center;
        align-items: center;
        line-height: 1.5625rem;
        width: 4.6875rem;
        border-radius: 1.5625rem;
        color: #fff;
        background: linear-gradient(90deg, #ff6346, #ff3f57);
      }
    }
    .oprice {
      align-items: center;
      display: flex;
      justify-content: space-between;
      .sell {
        font-size: 14px;
      }
    }
    .b-title {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        font-size: 12px;
      }
    }
  }

  .product-other {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 12px 16px;
    font-size: 0.875rem;
    .activity {
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      .tag {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        -webkit-align-self: flex-start;
        align-self: flex-start;
        color: #999;
        font-size: 0.875rem;
        white-space: nowrap;
      }
      .activity-container {
        margin-left: 0.75rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        overflow: hidden;
        .activity-item {
          text-align: left;
          width: 100%;
          overflow: hidden;
          font-size: 0.875rem;
          padding: 0 15px 15px 0;
          vertical-align: middle;
          white-space: nowrap;
          .type-name {
            color: #ff550f;
            font-size: 0.75rem;
            padding: 0 4px;
            border-radius: 16px;
            border: 1px solid #f05423;
            margin-right: 0.25rem;
            white-space: nowrap;
          }
          .description {
            vertical-align: middle;
            display: inline-block;
            max-width: 200px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .more {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      flex: 0 0 auto;
      -webkit-align-self: flex-start;
      align-self: flex-start;
      width: 24px;
      height: 24px;
    }

    .service {
      display: flex;
      font-size: 0.875rem;
      .tag {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        -webkit-align-self: flex-start;
        align-self: flex-start;
        color: #999;
        font-size: 0.875rem;
        white-space: nowrap;
      }
      .service-info {
        margin-left: 0.75rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        overflow: hidden;
        .list {
          display: flex;
          -webkit-box-pack: start;
          -webkit-justify-content: flex-start;
          justify-content: flex-start;
          color: #333;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          font-size: 0.875rem;
        }
      }
    }
  }
  .message {
    padding: 10px;
    display: flex;
    flex-direction: column;
    .msg-t {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .l {
        font-size: 16px;
      }
      .r {
        font-size: 12px;
        display: flex;
        justify-content: right;
        align-items: center;
        p {
          color: red;
        }
      }
    }
    .msg-b {
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 10px;
      .li-icon {
        width: 3.75rem;
        height: 3.75rem;
        // height: 30%;
        border-radius: 50%;
        background-color: #ddd;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }
      .li-text {
        height: 5rem;
        // background-color: red;
        width: 70%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        p {
          font-size: 12px;
        }
        p:nth-child(1) {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
  .shopcart {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    div {
      border: 1px solid #fff;
      color:#fff;
      width: 120px;
      font-size: 14px;
      height: 30px;line-height: 30px;
      border-radius: 20px;
    }
    .gotobuy {
       background: linear-gradient(90deg, #40b2eb, #66ccff);
    }
    .gotocart {
      background: linear-gradient(90deg, #ff6346, #ff3f57);
    }
  }
}
</style>
