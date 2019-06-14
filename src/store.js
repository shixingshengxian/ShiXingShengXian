import Vue from 'vue'
import Vuex from 'vuex'
var car = JSON.parse(localStorage.getItem("cart") || "[]");
var getdatalist = JSON.parse(localStorage.getItem("getdatalist") || "[]");
Vue.use(Vuex)
import Axios from "axios";
export default new Vuex.Store({
  state: {
    getdatalist: getdatalist,
    cart: car,
  },
  mutations: {
    getdatalist(state) {
      console.log(state.getdatalist);
      if(!state.getdatalist.length){
        console.log("hhhh");
        Axios.get(
          "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
          ).then(data => {
            state.getdatalist = [...data.data];
            localStorage.setItem('getdatalist', JSON.stringify(state.getdatalist))
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
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    //减少数量时，修改数据
    subNum(state, id) {
      state.cart.forEach(item => {
        if (id == item.id) {
          if (item.num !== 1) {
            item.num -= 1;

          }
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updataNum(state, obj) {
      state.cart.forEach(item => {
        if (item.id == obj.id) {
          item.num = obj.num
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },


    del(state, arr) {
      state.cart = arr;
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    addtocart(state, goods) {
      //判断是否需要添加商品的开关
      var flag = false;
      state.cart.some(item => {

        if (item.id == goods.id) {
          item.num += parseInt(goods.num);
          // 如果找到了项目flag就等于true
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.cart.push(goods);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }


  },
  getters: {

    getAllNum(state) {
      if (state.cart) {
        var c = 0;
        state.cart.forEach(item => {
          c += item.num;

        })
        return c;
      }

    }

  },
  actions: {

  }
});