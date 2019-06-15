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
      <div class="input-item-list">
        <input
          type="tel"
          placeholder="请输入您的手机号"
          value
          maxlength="11"
          v-model="iphone"
          @blur="phone"
        >
        <span class="btn-captcha" v-if="0">获取验证码</span>
      </div>
      <div class="input-item-list" v-if="0">
        <input type="text" placeholder="请输入4-10位的密码">
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list">
        <input
          type="password"
          placeholder="请设置4-10位的密码"
          v-model="psw"
          @blur="mima"
          value
          maxlength="10"
        >
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list">
        <input
          type="password"
          placeholder="请再次输入您的密码"
          v-model="rpsw"
          @blur="rmima"
          value
          maxlength="10"
        >
        <i class="close" style="display: none;"></i>
      </div>
    </div>

    <div class="deal tc mt10 gray">
      <label for="label">
        <input type="checkbox" id="label" checked="checked">我已阅读
        <a class="green">《易果服务协议》</a>
        <a class="green">《隐私条款》</a>并同意
      </label>
    </div>

    <div class="btn-login">
      <button type="button" class="btn_green w60p" @click="zhuce">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iphone: "",
      psw: "",
      rpsw: "",
      shuzu: [],
      trueIphone: "",
      truePsw: "",
      trueRpsw: ""
    };
  },
  methods: {
    phone() {
      var phone = this.iphone;
      if (/^1[3456789]\d{9}$/.test(phone)) {
        this.shuzu[0] = 1;
        this.trueIphone = phone;
      } else {
        this.shuzu[0] = 0;
      }
    },
    mima() {
      var psw = this.psw;
      var reg = /^[a-zA-Z0-9]{4,10}$/;
      if (reg.test(psw) == true) {
        this.shuzu[1] = 1;
        this.truePsw = psw;
      } else {
        this.shuzu[1] = 0;
      }
    },
    rmima() {
      var psw = this.psw;
      var rpsw = this.rpsw;
      if (psw == rpsw) {
        this.shuzu[2] = 1;
        this.trueRpsw = rpsw;
      } else {
        this.shuzu[2] = 0;
      }
    },
    zhuce() {
      var res = this.shuzu.every(function(item) {
        //返回布尔值，全部都是1才为真
        return item == 1;
      });
      // console.log(this.shuzu);
      if (res && this.shuzu.length == 3) {
        var ids = [
          {
            shouji: this.trueIphone
          },
          {
            mima: this.truePsw
          },
          {
            rmima: this.trueRpsw
          }
        ];
        // console.log(ids);
        var d = JSON.stringify(ids); //将变量转为字符串，才能写进去
        localStorage.setItem("name", d); //将变量存到localStorage里
        var json = localStorage.getItem("name"); //读取本地数据,拿键值name
        // var jsonObj = JSON.parse(json); //在转对象
        // console.log(typeof jsonObj);
        // console.log(jsonObj);
        alert("注册成功");
        this.$router.push({
          name: "login"
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
.sign-brand[data-v-56020504] {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 1.5rem 0 .5rem;
    height: 3.125rem;
    color: #4aaa35;
}
.wrap {
  font-size: 0.75rem;
  color: #000;
  padding: 5rem 0.625rem 0 0.625rem;
  font-family: "Avenir", "PingFang SC", "\5FAE\8F6F\96C5\9ED1";
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
.input-item-list input {
  display: block;
  width: 100%;
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
.btn-captcha,
.btn-captcha:hover {
  position: absolute;
  top: 0.9375rem;
  right: 0.9375rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  line-height: 1.875rem;
  text-align: center;
  color: #fff;
  border-radius: 0.25rem;
  background: #008842;
}
.mt10 {
  margin-top: 0.625rem;
}
.tc {
  text-align: center;
}
.gray {
  color: #8d8a8a;
}
.deal label {
  display: inline-block;
  padding-left: 1.0625rem;
  position: relative;
}
.deal input {
  width: 0.875rem;
  height: 0.875rem;
  position: absolute;
  top: 0.125rem;
  left: 0;
  -moz-appearance: checkbox;
  -webkit-appearance: checkbox;
}
.green {
  color: #008842;
}
a {
  text-decoration: none;
  outline: 0;
}
.btn-login {
  margin: 1.875rem 1.875rem 0;
  text-align: center;
}
.btn-login .w60p {
  width: 60%;
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
</style>

