<template>
  <div class="cg-longdiv">
    <ul class="cg-longul">
      <router-link to="/goodslist" class="cg-longli" v-for="(item) in datalist" :key="item.id">
        <img :src="item.img" alt>
        <p class="cg-longtitle">{{item.title}}</p>
        <div class="cg-longfullegg">
          <span>{{item.active}}</span>
        </div>

        <div class="cg-longprice" style="color: rgb(255, 56, 52);">
          <div>
            <div>¥{{item.price}}</div>
            <div class="cg-longunit">{{item.priceunit}}</div>
          </div>
          <div class="cg-longcart iconfont">&#xe89f;</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// import Axios from "axios";
export default {
  data () {
    return {
      datalist:this.$store.state.getdatalist
      ,datalistimg:[],
    }
  },
  created () {
     this.$store.commit('getDataList')
  },
  mounted() {
    // this.getdatalist();
  },
  methods: {


    // getdatalist(){
    //    Axios.get('https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/123').then(data=>{
    //     //  console.log(data.data);
    //      this.datalist=[...this.datalist,...data.data]
    //     //  console.log(this.datalist);
          
    //    })
    // }
  },
};
</script>

<style lang="scss" scoped>
.cg-longdiv::-webkit-scrollbar {
  display: none;
}
.cg-longdiv {
  width: 100%;
  overflow-x: auto;

  .cg-longul {
    // background-color: #ccc;
    width: 75rem;
    display: flex;
    justify-content: left;
    padding: 0 0.625rem;
    .cg-longli {
      width: 6.25rem;

      img {
        width: 100%;
      }
      .cg-longtitle {
        width: 6.25rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0 auto;
        font-size: 0.75rem;
      }
      .cg-longfullegg {
        span {
          text-overflow: ellipsis;
          padding: 0.0625rem 0.2rem;
          border-radius: 1rem;
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          line-height: 1;
          color: #ff550f;
          font-size: 0.6875rem;
          border: 0.0625rem solid #ff550f;
          background-color: #fff;
          max-width: 100%;
        }
      }
      .cg-longprice {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        align-items: flex-start;
        .cg-longunit {
          color: #000;
          text-align: left;
        }
        .cg-longcart {
          border: 0.0625rem solid #eee;
          border-radius: 50%;
          height: 1.25rem;
          width: 1.25rem;
          font-size: 1.125rem;
        }
      }
    }
  }
}
</style>
