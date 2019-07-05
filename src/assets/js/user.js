import common from './common.js'
// 获取验证码
const MsgCode = (_this, codeInfo) => {
  _this.$store.dispatch('GetInfo', true);
  _this.$axios({
    method: 'post',
    url: 'http://121.199.63.71:9006/send_code/',
    data: {
      phone: codeInfo
    }
  }).then((returned) => {
    if (returned.data.code === 200) {
      _this.$toast({
        position: "bottom",
        message: "验证码发送成功"
      });
      _this.$store.dispatch('GetInfo', false);
    }
  });
};
// 正则验证手机号
const isMsgSuccess = (phoneNumber) => {
  let TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
  return TEL_REGEXP.test(phoneNumber)
};

// 手机号倒计时
const resend = element => {
  let num = 60;
  let timer = setInterval(function () {
    num--;
    element.$el.innerHTML = num + '秒后重新获取';
    element.$el.disabled = ' disabled';
    if (num === 0) {
      element.$el.disabled = '';
      element.$el.innerHTML = '获取验证码';
      clearInterval(timer)
    }
  }, 1000)
};
//手机号密码登录


// 手机号登录注册
const loginOrRegister = (_this, codeInfo, cb) => {
  let {TEL, code} = codeInfo;
  let info = {
    phone: TEL,
    input_code: code
  };
  console.log(info);

};
export default {MsgCode, isMsgSuccess, loginOrRegister, resend}
