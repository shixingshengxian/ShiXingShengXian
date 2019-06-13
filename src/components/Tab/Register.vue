<template>
  <div class="wrap">
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
        <span class="btn-captcha">获取验证码</span>
      </div>
      <div class="input-item-list">
        <input type="text" placeholder="请输入您的验证码">
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list">
        <input type="password" placeholder="请设定您的密码" v-model="psw" @blur="mima" value maxlength="10">
        <i class="close" style="display: none;"></i>
      </div>
      <div class="input-item-list">
        <input type="password" placeholder="请再次输入您的密码" v-model="rpsw"  @blur="rmima" value maxlength="10">
        <i class="close" style="display: none;"></i>
      </div>
    </div>

    <div class="deal tc mt10 gray">
      <label for="label">
        <input type="checkbox" id="label">我已阅读
        <a class="green">《易果服务协议》</a>
        <a class="green">《隐私条款》</a>并同意
      </label>
    </div>

    <div class="btn-login">
      <button type="button" class="btn_green w60p">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iphone: "",
      psw: "",
      rpsw: ""
    };
  },
  methods: {
    phone() {
      var phone = this.iphone;
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        alert("手机号码有误，请重填");
        return false;
      }
    },
    mima() {
      var psw = this.psw;
      var reg = /^[a-zA-Z0-9]{4,10}$/;
      if (reg.test(psw) == false) {
        alert("密码有误，只支持数字和字母，请重填");
      }
    },
    rmima(){
      var psw = this.psw;
      var rpsw = this.rpsw;
      if(psw !== rpsw){
        alert('密码不一致，请重填');
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
.wrap {
  font-size: 12px;
  color: #000;
   padding:80px 10px 0 10px ;
  font-family: "Avenir", "PingFang SC", "\5FAE\8F6F\96C5\9ED1";
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
.input-item-list input {
  display: block;
  width: 100%;
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
.btn-captcha,
.btn-captcha:hover {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0 0.2rem;
  box-sizing: border-box;
  line-height: 30px;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: #008842;
}
.mt10 {
  margin-top: 10px;
}
.tc {
  text-align: center;
}
.gray {
  color: #8d8a8a;
}
.deal label {
  display: inline-block;
  padding-left: 17px;
  position: relative;
}
.deal input {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 2px;
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
  margin: 30px 30px 0;
  text-align: center;
}
.btn-login .w60p {
  width: 60%;
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
</style>

