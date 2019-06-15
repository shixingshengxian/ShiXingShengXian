import Vue from "vue";
import Vuex from "vuex";
var car = JSON.parse(localStorage.getItem("cart") || "[]");
var getdatalist = JSON.parse(localStorage.getItem("getdatalist") || "[]");
Vue.use(Vuex);
import Axios from "axios";
export default new Vuex.Store({
  state: {
    getdatalist: getdatalist,
    cart: car
  },
  mutations: {
    getDataList(state) {
      if (!state.getdatalist.length) {
        Axios.get(
          "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
        ).then(data => {
          state.getdatalist = [...data.data];
          localStorage.setItem(
            "getdatalist",
            JSON.stringify(state.getdatalist)
          );
        });
      }
      return state.getdatalist;
    },

    //购物车中数量增加的时候，对应的数据增加
    addNum(state, id) {
      state.cart.forEach(item => {
        if (id == item.id) {
          item.num += 1;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    //减少数量时，修改数据
    subNum(state, id) {
      state.cart.forEach(item => {
        if (id == item.id) {
          if (item.num !== 1) {
            item.num -= 1;
          }
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updataNum(state, obj) {
      state.cart.forEach(item => {
        if (item.id == obj.id) {
          item.num = obj.num;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    del(state, arr) {
      state.cart = arr;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    addToCart(state, goods) {
      //判断是否需要添加商品的开关
      var flag = false;
      state.cart.some(item => {
        if (item.id == goods.id) {
          item.num += parseInt(goods.num);
          // 如果找到了项目flag就等于true
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.cart.push(goods);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    //选中商品
    checkGood(state, info) {
      state.cart.forEach(item => {
        if (item.id == info.id) {
          item.selected = !item.selected;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    //全选 /全不选
    allCheck(state, isAllChecked) {
      state.cart.forEach(item => {
        item.selected = !isAllChecked;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    //删除所有选中的商品
    delCheck(state) {
      let index = state.cart.length;
      while (index--) {
        if (state.cart[index].selected) {
          state.cart.splice(index, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },

  getters: {
    getAllNum(state) {
      if (state.cart) {
        var c = 0;
        state.cart.forEach(item => {
          c += item.num;
        });
        return c;
      }
    },

    //是否全选
    isAllChecked(state) {
      let isAllChecked = !state.cart.some(item => {
        return !item.selected;
      });
      return isAllChecked;
    },

    //被选中的所有商品数据
    goodsCheckedData(state) {
      let checkedData = [];
      state.cart.forEach(item => {
        if (item.selected) {
          checkedData.push(item);
        }
      });
      return checkedData;
    },

    //被选中的商品总价格
    checkedPrice(state) {
      let price = 0;
      state.cart.forEach(item => {
        if (item.selected) {
          price += item.price * item.num;
        }
      });
      return price;
    },

    //被选中的商品总件数
    checkedNum(state) {
      let count = 0;
      state.cart.forEach(item => {
        if (item.selected) {
          count += item.num;
        }
      });
      return count;
    }
  },
  actions: {
    //增加数量
    addNum({ commit }, id) {
      commit("addNum", id);
    },

    //减少数量
    subNum({ commit }, id) {
      commit("subNum", id);
    },

    //减少数量
    updataNum({ commit }, obj) {
      commit("updataNum", obj);
    },

    //单选
    checkGood({ commit },id) {
      commit("checkGood",id);
    },

    //全选
    allCheck({ commit }, fn) {
      commit("allCheck", fn);
    },

    //删除所选
    delCheck({ commit }) {
      commit("delCheck");
    }
  }
});
