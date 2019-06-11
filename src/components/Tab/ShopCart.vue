<template>
  <div class="cart">
    <div class="cart-layout">
      <div class="cart-card">
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
        <div class="cart-card" v-for="(g,index) in goods" :key="index">
          <div class="flex-box">
            <input type="checkbox" :value="g" v-model="check_goods">

            <div class="activity-item">
              <div class="addition-item">
                <div class="image">
                  <div class="mn-image">
                    <img
                      src="http://picpro-sz.34580.com/sh/ImageUrl/144660/120.jpeg"
                      class="mn-image-source is-active"
                    >
                  </div>
                  <!---->
                  <!---->
                </div>
                <div class="addition-item-info">
                  <div class="card-title-wrapper">
                    <div class="text-overflow">
                      {{g.name}}{{g.info}}
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
                    <div class="freshes-counter" value="1">
                      <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCAyMSAzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c3ZnL2Ftb3VudF9yZWR1Y2VfbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLotK3nianovaYt54q25oCBIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTYyLjAwMDAwMCwgLTE4NTYuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9IuaNoui0rSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxNTI3LjAwMDAwMCkiIGZpbGw9IiMzMzMzMzMiPgogICAgICAgICAgICA8ZyBpZD0i5pWw6YePIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzguMDAwMDAwLCAzMDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYW1vdW50X3JlZHVjZV9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuWHjyIgeD0iMCIgeT0iMCIgd2lkdGg9IjIxIiBoZWlnaHQ9IjMiIHJ4PSIxLjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                        alt
                        class="min"
                        @click="g.num>1?g.num--:g.num=1"
                      >
                      <div class="freshes-counter-box">
                        <input
                          type="number"
                          class="freshes-counter-control"
                          style="font-size: 0.75rem;"
                          v-model="g.num"
                        >
                      </div>
                      <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5zdmcvYW1vdW50X2FkZF9uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iui0reeJqei9pi3nirbmgIEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODEuMDAwMDAwLCAtMTg0Ny4wMDAwMDApIj4KICAgICAgICA8ZyBpZD0i5o2i6LStIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE1MjcuMDAwMDAwKSIgZmlsbD0iIzMzMzMzMyI+CiAgICAgICAgICAgIDxnIGlkPSLmlbDph48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzOC4wMDAwMDAsIDMwOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJhbW91bnRfYWRkX24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExOS4wMDAwMDAsIDExLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLliqAiIHg9IjAiIHk9IjkiIHdpZHRoPSIyMSIgaGVpZ2h0PSIzIiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuWKoCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNTAwMDAwLCAxMC41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuNTAwMDAwLCAtMTAuNTAwMDAwKSAiIHg9IjAiIHk9IjkiIHdpZHRoPSIyMSIgaGVpZ2h0PSIzIiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                        alt
                        class="min"
                        @click="g.num++"
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
    </div>

    <div class="fresh-row cart-bottom-wrapper">
      <div class="cart-bottom">
        <div class="cart-bottom-information">
          <div class="select">
            <input
              type="checkbox"
              @click="check_all"
              :checked="check_goods.length === goods.length"
            >

            <span style="margin-left:5px">全选</span>
          </div>
          <div class="information">
            <div style="text-align:left">
              合计:
              <span class="price">
                ¥
                <span class="price-int">{{price_int(price_total)}}</span>.{{price_dec(price_total)}}
              </span>
            </div>
            <div class="information-tip">
              已省:
              ¥0.00
              <span style="color: rgb(153, 153, 153);">（已免运费）</span>
            </div>
          </div>
        </div>
        <div class="cart-bottom-action">
          <div class="button is-empty">去结算({{num_total}})</div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      goods: [
        {
          name: "西瓜",
          price: 2.9,
          num: 1,
          info: "250g/盒"
        },
        {
          name: "李子",
          price: 6.50,
          num: 3,
          info: "280g/盒"
        },
        {
          name: "芒果",
          price: 9.90,
          num: 4,
          info: "300g/盒"
        }
      ],
      check_goods: []
    };
  },
  computed: {
    num_total() {
      var num = 0;
      this.check_goods.forEach(function(item) {
        num += Number(item.num);
      });
      return num;
    },

    price_total() {
      var price = 0;
      this.check_goods.forEach(function(item) {
        price += Number(item.price) * Number(item.num);
      });
      return price;
    }
  },
  methods: {
    check_all() {
      if (this.check_goods.length > 0) {
        this.check_goods = [];
      } else {
        this.goods.forEach(item => {
          this.check_goods.push(item);
        });
      }
    },
    price_int(price) {
      return parseInt(price);
    },

    price_dec(price) {
      var dec = price.toString().split(".");
      if (dec[1]) {
        return dec[1];
      } else {
        return "00";
      }
    }
  }
});
</script>


<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
}
@import "../../assets/ListCard.css";
@import "../../assets/CartBar.css";
</style>
