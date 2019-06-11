<template>
  <div id="mine">
    <div id="my" class="my">
      <!-- 登录后出现 -->
      <div class="headerNav" style="display: none;">
        <div class="navBar" style="background: rgb(255, 255, 255);">
          <i
            class="goBack"
            style="background-image: url(&quot;//img05.yiguoimg.com/d/web/190109/00281/094952/goback.png&quot;);"
          ></i>
          <p class="title" style="color: rgb(51, 51, 51);">我的易果</p>
        </div>
      </div>

      <!-- 未登录的页面 -->
      <div class="myIn loginNot">
        <div class="header clear">
          <div class="headerImg">
            <span class="imgBorder">
              <img alt=" 用户头像" src="//img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg">
            </span>
            <a href="javascript:;">
              <p class="name" @click="lg()">登录/注册</p>
            </a>
          </div>
          <i class="setting"></i>
          <div class="account">
            <p class="list">
              <span class="num">-</span>
              <span class="txt">卡包余额</span>
            </p>
            <p class="list">
              <span class="num">-</span>
              <span class="txt">悠币</span>
            </p>
          </div>
        </div>
        <div class="listTab line-top">
          <ul class="line-bottom">
            <li class="fourLi">
              <a href="javascript:;">
                <i class="icon">
                  <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png" alt>
                </i>待支付
              </a>
            </li>
            <li class="fourLi">
              <a href="javascript:;">
                <i class="icon">
                  <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png" alt>
                </i>待收货
              </a>
            </li>
            <li class="fourLi">
              <a href="javascript:;">
                <i class="icon">
                  <img src="https://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png" alt>
                </i>评价送悠币
              </a>
            </li>
            <li class="fourLi">
              <a href="javascript:;">
                <i class="icon">
                  <img src="https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png" alt>
                </i>在线退换货
              </a>
            </li>
            <li class="border-left fourLi">
              <span class="pointRight"></span>
              <a href="javascript:;">
                <i class="icon"></i>全部订单
                <i class="goPage"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="testList clear">
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png"
                alt
                class="icon"
              >优惠券
            </a>
          </div>
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png"
                alt
                class="icon"
              >充值卡
            </a>
          </div>
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png"
                alt
                class="icon"
              >礼品兑换券
            </a>
          </div>
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png"
                alt
                class="icon"
              >收货地址
            </a>
          </div>
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png"
                alt
                class="icon"
              >帮助中心
            </a>
          </div>
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png"
                alt
                class="icon"
              >我的团购
            </a>
          </div>
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img06.yiguoimg.com/d/web/181121/00591/143839/account-icon.png"
                alt
                class="icon"
              >账户余额
            </a>
          </div>
          <div class="list line-bottom">
            <a href="javascript:;">
              <img
                src="https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png"
                alt
                class="icon"
              >在线客服
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            login:{
                url:'login'
            }
        }
    },
    methods:{
        lg(){
            this.$router.push({
                name:this.login.url
            })
        }
    }
};
</script>
<style lang="scss" scoped>
div,
span,
a,
header,
footer {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
#mine {
  font-size: 31px;
}
.my {
  overflow: hidden;
  margin-bottom: 28.8px;
  position: relative;
  background: #f4f4f4;
  color: #000;
  // font-size: 32px;
  font-family: "Avenir", "PingFang SC", "\5FAE\8F6F\96C5\9ED1";
}
.headerNav .navBar {
  width: 100%;
  height: 1.44em;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 103;
}
.headerNav .goBack {
  display: inline-block;
  width: 0.25em;
  height: 0.48em;
  position: absolute;
  left: 0.45em;
  top: 0.48em;
  background-size: 100% 100%;
}
.headerNav .title {
  margin-top: 0;
  font-size: 0.5em;
  line-height: 1.44em;
}
.my .header {
  position: relative;
  width: 100%;
  height: 6.44em;
  background: #2dd282
    url(//img06.yiguoimg.com/d/web/180517/01262/143351/bgimg.jpg) 100% 100%;
  background-size: 100% 100%;
  padding: 0 0em 1.2em 0em;
  box-sizing: border-box;
}
.my .header .headerImg {
  position: relative;
  display: inline-block;
  height: 2.26em;
  margin-top: 0.9em;
  padding: 0 0.32em 0 2.85em;
  box-sizing: border-box;
}

.my .loginNot .header .headerImg .imgBorder {
  display: inline-block;
  position: absolute;
  left: 0.5em;
  top: 0;
  border: 0.13em solid rgba(255, 255, 255, 0.5);
  width: 2.26em;
  height: 2.26em;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}
.my .loginNot .header .headerImg img {
  position: absolute;
  top: 0;
  left: 0em;
  width: 2.26em;
  height: 2.26em;
  border-radius: 50%;
}
a {
  text-decoration: none;
  outline: 0;
}
.my .loginNot .header .name {
  display: inline-block;
  text-align: left;
  color: #fff;
  font-size: 0.52em;
  width: 10em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.7em;
  padding: 0.34em 0 0 0.8em;
}
.my .header .setting {
  position: absolute;
  top: 0.36em;
  right: 0.5em;
  display: inline-block;
  width: 0.55em;
  height: 0.61em;
  background: url(//img07.yiguoimg.com/d/web/180508/01319/184003/setting.png)
    no-repeat;
  background-size: 100% 100%;
}
.my .account {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.78em;
  background: white;
  padding: 0.3em 0.3em 0.3em 0.3em;
  box-sizing: border-box;
}
.my .account .list {
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
}

.my .account .list span {
  display: block;
}
.my .account .list span.num {
  font-size: 0.5em;
  color: #0e9f4e;
}
.my .account .list span.txt {
  font-size: 0.32em;
  color: #333333;
}
.my .account .list:last-child {
  border: none;
}
.my .account .list {
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
}
.clear:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
.my .listTab {
  position: relative;
  width: 100%;
  background: #fff;
  height: 2.7em;
  margin: 0.3em 0;
}
.my .listTab ul {
  position: relative;
  width: 100%;
  height: 100%;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.my .listTab ul li.fourLi {
  position: relative;
  float: left;
  width: 20%;
  height: 100%;
}
.my .listTab ul li a {
  display: inline-block;
  font-size: 0.4em;
  color: #333;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 2.5em;
  box-sizing: border-box;
}

.my .listTab ul li a .icon {
  width: 1.74em;
  height: auto;
  margin-left: -0.37em;
}
.my .listTab ul li a .icon {
  position: absolute;
  left: 43%;
  top: 1.4em;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}
.my .listTab ul li a .icon img {
  width: 100%;
  height: 100%;
}
img {
  border: 0;
  vertical-align: middle;
}
.my .listTab ul li.border-left .pointRight {
  position: absolute;
  top: 0.05em;
  left: 0;
  display: inline-block;
  width: 0.16em;
  height: 100%;
  background: url(//img07.yiguoimg.com/d/web/180313/01318/155922/xian.png)
    no-repeat;
  background-size: 100% 100%;
}
.my .listTab ul li a {
  display: inline-block;
  font-size: 0.36em;
  color: #333;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 3.73em;
  box-sizing: border-box;
}
.my .listTab ul li:last-child a .icon {
  width: 1.8em;
  height: 1.8em;
  background: url(//img07.yiguoimg.com/d/web/180315/01315/162344/allorder.png)
    no-repeat;
  margin-left: -0.45em;
  background-size: 100% 100%;
}
.my .listTab ul li a .goPage {
  display: inline-block;
  width: 0.15em;
  height: 0.24em;
  background: url(//img05.yiguoimg.com/d/web/180313/01318/155922/gopage2.png)
    no-repeat;
  background-size: 0.15em 0.24em;
  vertical-align: middle;
  margin-left: 0.1em;
}
.line-bottom:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #ddd;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.my .testList {
    position: relative;
    width: 100%;
    background: #fff;
    margin-bottom: .3em;
}
.my .testList .list {
    position: relative;
    float: left;
    width: 25%;
    height: 2.7em;
}
.my .testList .list a {
    position: relative;
    font-size: .36em;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 3.7em;
    text-align: center;
    box-sizing: border-box;
    color: #333;
}
.my .testList .list a .icon {
    width: 2.08em;
    height: 2.08em;
    margin-left: -.504em;
    display: inline-block;
    position: absolute;
    top: 1.2em;
    left: 45%;
}
.line-bottom:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
</style>
