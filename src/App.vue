<template>
  <div id="app">
    <div title="固定在顶部" :class="{'top-fixed':true,'blues':blueflag,'reds':redflag}" v-if="mineshow">
      <div class="l" v-if="topflag" @click="goback">
        <i class="iconfont">&#xe8b5;</i>
        <p>返回</p>
      </div>
      <p class="m">食味生鲜</p>
      <i class="iconfont">&#xe893;</i>
    </div>
    <transition>
      <router-view class="middle"></router-view>
    </transition>

    <div class="cg-flxed" v-if="bottomflag">
      <router-link to="/home" class="cg-box" tag="p">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe68c;</i>
        </span>
        <span class="span-b">首页</span>
      </router-link>
      <router-link to="/sort" class="cg-box" tag="p">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe6c7;</i>
        </span>
        <span class="span-b">分类</span>
      </router-link>
      <router-link to="/shopcart" class="cg-box" tag="p">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe8e7;</i>
          <span class="span-ball" v-show="$store.getters.getAllNum">{{$store.getters.getAllNum}}</span>
        </span>
        <span class="span-b">购物车</span>
      </router-link>
      <router-link to="/mine" class="cg-box" tag="p">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe6d2;</i>
        </span>
        <span class="span-b">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topflag: true,
      blueflag:false, 
      redflag:false,
      bottomflag:true,
      mineshow:true,
    };
  },
created() {
  this.$store.commit('getdatalist');
},
  methods: {
    goback() {
      this.$router.go(-1);
    }
    //  tz(id){
    // this.$router.push("/home/phoneinfo/"+id)
    // this.$router.push({path:"/home/phoneinfo/"+id})
    // this.$router.push({name:"phoneinfo",params:{id}})
    // },
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal == "/home" || newVal == "/") {
        this.topflag = false;
         this.blueflag=false; 
         this.redflag=false
         this.bottomflag=true;
         this.mineshow=true;
      }else if(newVal=="/goodslist"){
        this.topflag = true;
        this.blueflag=false; 
        this.redflag=true;
        this.bottomflag=true;
        this.mineshow=true;
      }else if(newVal=="/goodslist/goodsdetail"){
        this.redflag=false;
        this.topflag = true;
        this.blueflag=true; 
        this.bottomflag=false;
      }else if(newVal=='/login'||newVal=='/register'){
        this.mineshow=false;
        this.bottomflag=false;
      }else if(newVal=='/mine'){
        this.mineshow=false;
         this.bottomflag=true;
      }  else {
        this.redflag=false;
        this.topflag = true;
        this.blueflag=false; 
        this.bottomflag=true; this.mineshow=true;
      }
     
      // console.log(newVal, this.topflag);
    }
  }
};
</script>



<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-color: #fff;
    p{
      margin-bottom: 0;
      color:#000;
    }
  .router-link-exact-active{
    color:chartreuse;
  }
  a {
    text-decoration: none;
  }
  // margin-bottom: 55px;
  display: flex;
  flex-direction: column;
  .top-fixed {
    display: flex;
    height: 40px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    .l {
      display: flex;
      font-size: 14px;
      align-items: center;
    }
    .m {
      flex: 1;
    }
  }
  .blues{
     background: linear-gradient(90deg, #40b2eb, #66ccff);
     color:#fff;
  }
  .reds{
    background: linear-gradient(90deg, #ff6346, #ff3f57);
    color:#fff;
  }

  .middle {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .mint-header {
    color: #000;
    background-color: #fff;
    height: 2.5rem;
  }
  .line {
    height: 10px;
    background-color: #f5f5f5;
  }

  .myself {
    background-color: #ccc;
    width: 100%;
    height: 6.25rem;
  }

  .cg-flxed {
    // position: fixed;
    z-index: 99;
    height: 3.125rem;
    // left: 0;
    // bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .cg-box {
      width: 15%;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      // background-color: #ccc;
      .span-t {
        // height: 1.875rem;
        display: block;
        position: relative;
        color: #000;
        // font-size: 1.875rem;
        .span-ball {
          position: absolute;
          text-align: center;
         
         height: 18px;
        // padding: 3px;
        border: 1px solid red;
        border-radius: 4px;
        background-color: red;
         line-height: 18px;
          font-size: 12px;
          top: -2px;
          right: 7px;
          color:#fff;
          padding:0 3px;
          font-weight: bold;
        }
      }
      .span-b {
        display: block;
        height: 0.625rem;
        font-size: 0.625rem;
      }
    }
  }
}
</style>
