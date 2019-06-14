<template>
  <div class="cart">
    <div class="cart-layout">
      <div class="cart-card" v-show="cart.length">
        <div class="flex-box">
          <div class="flex-box-left card-title">
            <div class="card-title-wrapper">
              <span class="card-title-tag">全场换购</span>
              <div class="flex-1">全场满49元可换购1件</div>
            </div>
            <div class="card-title-tip">还差36.1元</div>
          </div>
          <div class="flex-box-right">
            查看换购
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAFiXLgWAAAABGdBTUEAALGPC/xhBQAAA9hJREFUSA21ljtoVEEUhvfuxt1goUnQRgVNCkWD3Yrk0RlRsLGIFiKilQo+QAsLo6I2lgbUWGnlG6yNRKs8NiRitQo+QUFBBEENeXl3/f67mcvcvY8YkwzMnplz/nPOnMfM3VSqevT395cDPBiltMVxvDXcPxbTWg4ODu6wtqkUjDdG5463GBgYcAMQOR0dHV0RYNobAbDTI17lAJYUc53lcvmRz4LxOeBjaGhoo0z4CLOQwKxtmnZd91XAhC3F1BgzOgEICpG+ZAGTXUYYikMmHcf5abtKCY1WX4hJOo6FmIVCYVOIWSwWswEmG0eRK0gJ6uvrc83NzVPVIHvvn1ZZIdtqCTeTyWxuaWl5bQPN2lcwDBQ/o7iGEEvMk62trdeMTDSkYISkQH2zzwM5zrO2trYOb20AcRSPaoz7yDN4/GG3cUgH8FnADwVOp9Nv8dIQeSSOUwC0VRYA3iSOo1pr1FRI5RfgGKulTBfgToC9tlxrT0E11kaZyeVyK/P5/HftY0eozLHIGcHw8HDjbBgjT+s409PTH6APDDOJKq1XZgB7URpNAkvmpRXgEQK+rl6CfiHfq+MU/TrQtR107ROAGeZ4e3u70hsavoIkeNoAKTLVBmU8hTohoCAlrldDqVRSHTwZSlIuSaYRUhCTN2zJxMSEd5Hkqa6ubhkX63esggQaHNHugEY64FOkhwq88kvHTpG9JezcmpqahlBQNjhqHejWaoCOxDBN2cSRfkYeaU5Bz5bWQAwqHDX4xtHIplOm2qJ+DXRkXwHL29h7VYaOR1XZV8DyEYJ7CkN99DWujzwF8qz27kFB3l4AXiVB3EgDPDMjfAg4HwcM8EdGRpoCjISNVweOdRtPB5UZRjcBn67OToKNRJGD8bUgPmLYL7ocwXtOV+82XZ1oJUHoG6US58FdZMq4x5+J4h1v4XbdhAQ7sSLfgUHQH3uI5g5TVVTZU6z1Mv/S68x3bNhg/4WGHBglIsoTQS/Gl8PzHEFdpY95gM/APYNNorEOjBIRrcZJH3M9PEWl4aWRiC7h6EKFFf07qwOjxg1fOjk5+RhHwb92AIjoEQ2xP+r/wz87MI5w4BBVN/S44YnipATvZW1t7U774zhnB7ZRHB3G6A2m2CZ9+mf6jfTtIn0v5+XAOOMudeHkstlbdEviE2wBI5dVERjM/CLgpKrBVegJY1F03jVYtC7itLH3gINf5gnWExM7You8aDeZjujkOHfJ8cK+RaTiHF/MSxgPvKYU7302m+3479eUP17rMPxB3WESiVE5WbjvAWm5hYNDcoDxbm7gKbWdcTgf+hdsVRSvP/xD2wAAAABJRU5ErkJggg=="
              alt
              class="icon-arrow"
            >
          </div>
        </div>
      </div>

      <div>
        <div class="cart-card" v-for="g in cart " :key="g.id">
          <div class="flex-box">
            <div class="chk-box">
              <div class="mui-input-row mui-checkbox">
                <label></label>
                <input name="checkbox1" type="checkbox" :value="g" v-model="check_cart">
              </div>
            </div>

            <div class="activity-item">
              <div class="addition-item">
                <div class="image">
                  <div class="mn-image">
                    <img
                      :src="g.img"
                      class="mn-image-source is-active"
                    >
                  </div>
                  <!---->
                  <!---->
                </div>
                <div class="addition-item-info">
                  <div class="card-title-wrapper">
                    <div class="text-overflow">
                      {{g.title}}{{g.info}}
                      <!---->
                    </div>
                  </div>
                  <div class="unit-mood">{{g.info}}</div>
                  <div class="flex-box-between">
                    <div class="flex-box maxmark-gradient">
                      <div class="price">
                        ¥
                        <span class="price-int">{{price_int(g.price)}}</span>
                        .{{price_dec(g.price)}}
                      </div>
                      <!---->
                    </div>
                    <div class="freshes-counter" :value="g.num">
                      <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCAyMSAzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c3ZnL2Ftb3VudF9yZWR1Y2VfbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLotK3nianovaYt54q25oCBIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTYyLjAwMDAwMCwgLTE4NTYuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9IuaNoui0rSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNTI3LjAwMDAwMCkiIGZpbGw9IiMzMzMzMzMiPgogICAgICAgICAgICA8ZyBpZD0i5pWw6YePIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzguMDAwMDAwLCAzMDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYW1vdW50X3JlZHVjZV9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuWHjyIgeD0iMCIgeT0iMCIgd2lkdGg9IjIxIiBoZWlnaHQ9IjMiIHJ4PSIxLjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                        alt
                        class="min"
                        @click="sub(g.id)"
                      >
                      <div class="freshes-counter-box">
                        <input
                          type="number"
                          class="freshes-counter-control"
                          style="font-size: 0.75rem;"
                          @change="numChange(~~g.num,g.id)"
                          v-model="g.num"
                        >
                      </div>
                      <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5zdmcvYW1vdW50X2FkZF9uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iui0reeJqei9pi3nirbmgIEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODEuMDAwMDAwLCAtMTg0Ny4wMDAwMDApIj4KICAgICAgICA8ZyBpZD0i5o2i6LStIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE1MjcuMDAwMDAwKSIgZmlsbD0iIzMzMzMzMyI+CiAgICAgICAgICAgIDxnIGlkPSLmlbDph48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzOC4wMDAwMDAsIDMwOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJhbW91bnRfYWRkX24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExOS4wMDAwMDAsIDExLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLliqAiIHg9IjAiIHk9IjkiIHdpZHRoPSIyMSIgaGVpZ2h0PSIzIiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuWKoCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNTAwMDAwLCAxMC41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuNTAwMDAwLCAtMTAuNTAwMDAwKSAiIHg9IjAiIHk9IjkiIHdpZHRoPSIyMSIgaGVpZ2h0PSIzIiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                        alt
                        class="min"
                        @click="add(g.id)"
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="activity-item-tip">
                <div class="description">特价商品 库存有限 请尽快下单</div>
                <!---->
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-none" v-show="!cart.length">
        <img
          src="data:image/png;base64,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"
        >
        <p>您的购物车空空如也</p>
        <router-link to="/sort">
          <button class="mn-btn is-primary">
            <!---->
            去逛逛
          </button>
        </router-link>
      </div>
    </div>

    <div class="fresh-row cart-bottom-wrapper" v-show="cart.length">
      <div class="cart-bottom">
        <div class="cart-bottom-information">
          <div class="select">
            <div class="chk-box">
              <div class="mui-input-row mui-checkbox">
                <label></label>
                <input
                  name="checkbox1"
                  type="checkbox"
                  @click="check_all"
                  :checked="check_cart.length === cart.length"
                >
              </div>
            </div>
            <span style="margin-left:-5px; line-height:26px">全选</span>
          </div>
          <div class="information" v-show="!edit_card">
            <div style="text-align:left">
              合计:
              <span class="price">
                ¥
                <span class="price-int">{{price_int(price_total)}}</span>
                .{{price_dec(price_total)}}
              </span>
            </div>
            <div class="information-tip">
              已省:
              ¥0 .00
              <span style="color: rgb(153, 153, 153);">（已免运费）</span>
            </div>
          </div>
        </div>
        <div class="cart-bottom-action">
          <div class="button is-empty" v-show="!edit_card">去结算({{num_total}})</div>
          <div class="button is-empty" v-show="edit_card" @click="del">删除</div>

          <!---->
        </div>
      </div>
    </div>

    <div class="cart-actions" @click="edit_mode()" v-show="cart.length">
      <span v-show="!edit_card">编辑</span>
      <span v-show="edit_card">完成</span>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //存取数据的
      cart: this.$store.state.cart,
      check_cart: [], //勾选的空数组
      edit_card: false //判断是否进入编辑模式
    };
  },
  computed: {
    //勾选数量的函数
    num_total() {
      var num = 0;
      //遍历勾选的数组，然后相加
      this.check_cart.forEach(function(item) {
        num += Number(item.num);
      });
      return num;
    },
    //计算勾选的总价格
    price_total() {
      var price = 0;
      //遍历勾选内容的数组
      this.check_cart.forEach(function(item) {
        price += Number(item.price) * Number(item.num);
      });
      //返回一个总价格
      return price;
    }
  },
  methods: {
    add(id) {
      this.$store.commit("addNum", id);
    },
    sub(id) {
      this.$store.commit("subNum", id);
    },
    del() {
      let arr = [];
      this.cart.forEach(item => {
        if (this.check_cart.indexOf(item) >= 0) {
          // console.log(item);
        } else {
          arr.push(item);
        }
      });
      this.cart = arr;
      this.check_cart = [];
      this.$store.commit('del',this.cart);
    },
    //手动修改数据的时候
    numChange(num,id) {
      this.$store.commit('updataNum',{id,num})
    },
    //全选的函数
    check_all() {
      if (
        //判断语句，如果不等于就不勾选全选
        this.check_cart.length >= 0 &&
        this.check_cart.length != this.cart.length
      ) {
        this.check_cart = this.cart;
      } else if ((this.check_cart.length == this.cart.length)) {
        this.check_cart = [];
      } else {
        this.cart.forEach(item => {
          this.check_cart.push(item);
        });
      }
    },
    //商品价格的整数截取部分函数
    price_int(price) {
      return parseInt(price);
    },
    //商品价格的小数截取部分函数
    price_dec(price) {
      var price = Number(price);
      price = price.toFixed(2);
      var dec = price.split(".");
      return dec[1];
    },
    //点击进入编辑模式
    edit_mode() {
      this.edit_card = !this.edit_card;
      this.check_cart = [];
    }

    //删除的功能
  }
};
</script>


<style scoped>
@import "../../lib/mui/css/mui.css";
.cart {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
}

.cart-layout {
  flex: 1;
  overflow-x: hidden;
  overflow: auto;
}

.cart-actions {
  position: fixed;
  bottom: 7rem;
  right: 0.5rem;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 0.875rem;
  color: #fff;
  line-height: 44px;
  text-align: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
}

.cart-none {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 3rem 0;
  color: #ccc;
}

.cart-none img {
  width: 90%;
  margin: 0 auto;
  display: block;
}

.cart-none p {
  margin-top: -3rem;
}

.mn-btn {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 2.75rem;
  line-height: 1.5rem;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  text-decoration: none;
  border: none;
  outline: none;
  background: transparent;
  vertical-align: middle;
}

.cart-none .mn-btn {
  background-color: #49aa34;
  color: #fff;
  padding: 0 3rem;
  border-radius: 5px;
  margin-top: 1rem;
}
@import "../../assets/ListCard.css";
@import "../../assets/CartBar.css";
</style>
