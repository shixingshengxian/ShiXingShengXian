<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>

    <div class="cg-flxed">
      <router-link to="/" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe68c;</i>
          <span class="span-ball"></span>
        </span>
        <span class="span-b">首页</span>
      </router-link>
      <router-link to="/sort" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe6c7;</i>
          <span class="span-ball"></span>
        </span>
        <span class="span-b">分类</span>
      </router-link>
    
      <router-link to="/shopcart" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe8e7;</i>
          <span class="span-ball"></span>
        </span>
        <span class="span-b">购物车</span>
      </router-link>
      <router-link to="/mine" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe6d2;</i>
          <span class="span-ball"></span>
        </span>
        <span class="span-b">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //  tz(id){
    // this.$router.push("/home/phoneinfo/"+id)
    // this.$router.push({path:"/home/phoneinfo/"+id})
    // this.$router.push({name:"phoneinfo",params:{id}})
    // },
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    text-decoration: none;
  }
  margin-bottom: 55px;
  .line {
    height: 10px;
    background-color: #f5f5f5;
  }
  
  .myself {
    background-color: #ccc;
    width: 100%;
    height: 100px;
  }

  .cg-flxed {
    position: fixed;
    height: 50px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    .cg-box {
      width: 15%;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      // background-color: #ccc;
      .span-t {
        // height: 30px;
        display: block;
        position: relative;
        color: #000;
        // font-size: 30px;
        .span-ball {
          position: absolute;
          height: 12px;
          width: 12px;
          // background-color: red;
          border-radius: 50%;
          top: 0px;
          right: 10px;
        }
      }
      .span-b {
        display: block;
        height: 10px;
        font-size: 10px;
      }
    }
  }
}
</style>
