<template>
  <div class="wrap">
    <div class="input-item">
      <div class="input-item-list username">
        <span class="icon-username"></span>
        <input type="text" placeholder="请输入您的用户名" v-model="login.username" @keyup="uname">
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list password">
        <span class="icon-password"></span>
        <input type="password" placeholder="请输入您的密码">
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list password">
        <input type="text" placeholder="请输入验证码" style="width: 65%; border: none; float: left;">
        <img
          src="data:image/gif;base64,R0lGODlhMgAWAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAAAyABYAAAj/AIkpE0hwoMGCCA8qTMhwoTJl+yJGHCOxokWJnPaBuVgxk8Vm+zxWJCaSY0RNFomFrGiLYyaIFgfugxnxIbEfF3NY2Teg4ieJxyTSlKTs5UWjEVVGfKlS2bB9qCQKuqg0qUSUFWVKFGjx576CIkEpXYdqmDRUaFNZJIUq1TJ9tFD5kUvXj69IfvL60ZC30b5hoPYla0rpaVFvZxNL8/VVmaZk2FCp2qcPreW5flIpi3skr1w/mrg2zkosGSpp9b6KdSqRHNpbW9Ws8wMLYtWvyfwoAuR432SxWyOaOZOqkCaaEsmi7TVakytUuEY1EnicGFw/fzQ93Yr8E7Fd0sI5/0W+jx0qW7RULSuqLIZpP8Q6CESqKy8xYnWyihx8QV+10wCiAktEm0gmjGSDGbQLKn8oBdFTiQyByiQckCeaRJUZkdhpt5TWFjG8oALbY/toMhssVam0S1/M3SYYQdUJI800qhGUzHO+bCbiYKvRIksjyRwHmDBzGQKThRBhEdEnZIUj0VOgLGgZKimIGNEw+sSCyjJfRRSGK37wts5SFoGynUSI4bKVWOSocdaUxOQQ0YEoECPMPnHsQ04EboFiyExUQYRNRPpII407mmACyg0RgfJKYOblWFUkkkUz0zC96IVZXlgJ1ek++UiTiovBkaUSO8C55gsL1C24qTA8+HtRTEQyJEWeSbjuk8QExFQX0TddUiXRBjWRahIZxR60jzwlDOYVoKtVhUCgEAB2n0EEDCTQMKEFGSQvxAQ2Ej4WEVBsFwZtYUCxFUUB2DDKHJErdwJ1IZZ2QhrEVDCPEeTdeMRwa1C//5ZW3UDeeZuvTd6ZOZDD1CVITEAAOw=="
          class="yzcode"
        >
      </div>
    </div>
    <div class="login-option">
      <span class="retrieve_password">
        <a href="javascript:;">忘记密码?</a>
      </span>
    </div>
    <div class="btn-login clearfix">
      <button type="button" class="btn_green myleft">登录</button>
      <button type="button" @click="zhuce()" class="btn_white myright">立即注册</button>
    </div>
    <div class="bottomcopyright"><em class=" icon yiguo_logo"></em></div>
  </div>
</template>
<script>
// import Vue from 'vue';
// var vm = new Vue({
//   el:'.warp',
//   data:{
//     username:this.username
//   }
// });
export default {
  data(){
    return{
      register :{
        url:'register'
      },
      login:{
        username:''
      }
    }
  },
  methods:{
    zhuce(){
      this.$router.push({
        name:this.register.url
      })
    },
    uname(){
      
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
* {
  padding: 0;
  margin: 0;
}
.input-item {
  border: 1px solid #d9dfd5;
  border-width: 1px 0;
  margin-top: 30px;
  padding: 0 0 0 20px;
  background: #fff;
}
.input-item-list {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
}
.icon-username {
  background: url(//img07.yiguoimg.com/e/web/160104/02423/150313/icon_username.png)
    no-repeat;
  background-size: 100% 100%;
}
.icon-password,
.icon-username {
  display: block;
  position: absolute;
  top: 20px;
  left: 0;
  width: 18px;
  height: 20px;
}
.password input,
.username input {
  padding: 0 0 0 30px;
}
.input-item-list input {
  display: block;
  height: 30px;
  font-size: 16px;
  border: none;
  background: none;
}
textarea,
input {
  display: block;
  border: none;
  outline: none;
  -webkit-appearance: none;
}
.close {
  display: none;
  position: absolute;
  right: 0.28rem;
  top: 50%;
  margin-top: -0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  background: url(//img05.yiguoimg.com/d/web/170830/00913/153914//icon-close.png);
  background-size: 100% 100%;
}
.icon-password {
  background: url(//img07.yiguoimg.com/e/web/160104/02423/150313/icon_password.png)
    no-repeat;
  background-size: 100% 100%;
}
.yzcode {
  height: 30px;
  margin-left: 5px;
}
img {
  border: 0;
  vertical-align: middle;
}
.login-option {
  margin: 15px 30px 0 20px;
}
.retrieve_password {
  float: left;
  width: 45%;
  text-align: left;
}
.login-option a {
  color: #008842;
  font-size: 15px;
}
.login-option:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.btn-login {
    margin: 30px 30px 0;
    text-align: center;
}
.btn-login button {
    display: inline-block;
    width: 45%;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
}
.btn_green {
    color: #fff;
    background: #008842;
}
.myleft {
    float: left;
}
.btn-login .btn_white {
    border: 1px solid #008842;
    color: #008842;
    background: #fff;
}
.btn-login button {
    display: inline-block;
    width: 45%;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
}
.myright {
    float: right;
}
.bottomcopyright {
    width: 100%;
    text-align: center;
    bottom: 15px;
    left: 0;
    padding: 10px;
    position: absolute;
    box-sizing: border-box;
}
.yiguo_logo {
    width: 104px;
    height: 34px;
    background-image: url(//img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png);
    background-size: 100% 100%;
    margin: 0 auto;
    display: block;
}
</style>
