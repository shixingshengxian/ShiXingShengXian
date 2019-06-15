<template>
  <div class="wrap" style="background: linear-gradient(90deg, rgb(140, 229, 135), rgb(102, 204, 255));">
    <div data-v-56020504 class="sign-brand">
      <img
        data-v-56020504
        src="../../assets/logo.png"
        alt
        style="width: 26.7%;"
      >
    </div>
    <div class="input-item">
      <div class="input-item-list username">
        <span class="icon-username"></span>
        <input type="text" placeholder="请输入您的用户名" v-model="iphone" @blur="phone()">
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list password">
        <span class="icon-password"></span>
        <input type="password" placeholder="请输入您的密码" v-model="psw" @blur="mima()">
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list password">
        <input
          v-model="code"
          @blur="yanzheng()"
          type="text"
          placeholder="请输入验证码"
          style="width: 65%; border: none; float: left;"
        >
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
      <div @click="tz" class="r">点我跳转到路人模式</div>
    </div>
    <div class="btn-login clearfix">
      <button type="button" class="btn_green myleft" @click="deng()">登录</button>
      <button type="button" @click="zhuce()" class="btn_white myright">立即注册</button>
    </div>
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
  data() {
    return {
      register: {
        url: "register"
      },
      iphone: "",
      psw: "",
      code: "",
      shuzu: []
    };
  },
  methods: {
    zhuce() {
      this.$router.push({
        name: this.register.url
      });
    },
    tz() {
      this.$router.push({ name: "home" });
    },
    phone() {
      var phone = this.iphone;
      var json = localStorage.getItem("name"); //读取本地数据,拿键值name
      var jsonObj = JSON.parse(json); //在转对象
      // console.log(typeof jsonObj);
      // console.log(jsonObj);
      // console.log(jsonObj[0].shouji);
      var shouji = jsonObj[0].shouji;
      if (/^1[3456789]\d{9}$/.test(phone) && shouji == phone) {
        this.shuzu[0] = 1;
      } else {
        this.shuzu[0] = 0;
        // alert("手机号码有误，请重填");
      }
    },
    mima() {
      var psw = this.psw;
      var reg = /^[a-zA-Z0-9]{4,10}$/;
      var json = localStorage.getItem("name"); //读取本地数据,拿键值name
      var jsonObj = JSON.parse(json); //在转对象
      var mimas = jsonObj[1].mima;
      if (reg.test(psw) == true && mimas == psw) {
        this.shuzu[1] = 1;
      } else {
        this.shuzu[1] = 0;
      }
    },
    yanzheng() {
      var yanzhengma = this.code;
      if (yanzhengma == "f4tz" || yanzhengma == "F4TZ") {
        this.shuzu[2] = 1;
      } else {
        this.shuzu[2] = 0;
        // alert("验证码错误，请重填");
      }
    },
    deng() {
      var res = this.shuzu.every(function(item) {
        //返回布尔值，全部都是1才为真
        return item == 1;
      });
      // console.log(this.shuzu);
      if (res && this.shuzu.length == 3) {
        alert("登陆成功");
        this.$router.push({
          name: "home"
        });
      } else {
        alert("请完善信息");
      }
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
.wrap {
  padding: 5rem 0.625rem 0 0.625rem;
}
.input-item {
  border: 0.0625rem solid #d9dfd5;
  border-width: 0.0625rem 0;
  margin-top: 1.875rem;
  padding: 0 0 0 1.25rem;
  background: #fff;
}
.input-item-list {
  position: relative;
  padding: 0.9375rem 0;
  border-bottom: 0.0625rem solid #e7e7e7;
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
  top: 1.25rem;
  left: 0;
  width: 1.125rem;
  height: 1.25rem;
}
.password input,
.username input {
  padding: 0 0 0 1.875rem;
}
.input-item-list input {
  display: block;
  height: 1.875rem;
  font-size: 1rem;
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
  height: 1.875rem;
  margin-left: 0.3125rem;
}
img {
  border: 0;
  vertical-align: middle;
}
.login-option {
  margin: 0.9375rem 1.875rem 0 1.25rem;
  .r {
    float: right;
    border: 0.0625rem solid #000;
    display: block;
    background-color: #000;
    color: #fff;
    height: 1.25rem;
    border-radius: 0.3125rem;
  }
}
.retrieve_password {
  float: left;
  width: 45%;
  text-align: left;
}
.login-option a {
  color: #008842;
  font-size: 0.9375rem;
}
.login-option:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.btn-login {
  margin: 1.875rem 1.875rem 0;
  text-align: center;
}
.btn-login button {
  display: inline-block;
  width: 45%;
  height: 2.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
}
.btn_green {
  color: #fff;
  background: #008842;
}
.myleft {
  float: left;
}
.btn-login .btn_white {
  border: 0.0625rem solid #008842;
  color: #008842;
  background: #fff;
}
.btn-login button {
  display: inline-block;
  width: 45%;
  height: 2.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
}
.myright {
  float: right;
}
.bottomcopyright {
  width: 100%;
  text-align: center;
  bottom: 0.9375rem;
  left: 0;
  padding: 0.625rem;
  position: absolute;
  box-sizing: border-box;
}
.yiguo_logo {
  width: 6.5rem;
  height: 2.125rem;
  background-image: url(//img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png);
  background-size: 100% 100%;
  margin: 0 auto;
  display: block;
}
</style>
