import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Axios from "axios";
export default new Vuex.Store({
  state: {
    goodslist:[]
  },
  mutations: {
    getdatalist(state) {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123"
      ).then(data => {
        state.goodslist = [...state.goodslist, ...data.data];
        
      });
    }
  },
  actions: {

  }
})
