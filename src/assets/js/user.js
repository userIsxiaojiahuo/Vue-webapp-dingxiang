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
      _this.$store.dispatch('GetInfo', false);
    }
  });
  console.log("发送中")
};
// 正则验证手机号
const isMsgSuccess = (phoneNumber) => {
  let TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
  return TEL_REGEXP.test(phoneNumber)
};

// 手机号登录注册
const loginOrRegister = (_this, codeInfo) => {
  let {TEL, code} = codeInfo;
  let info = {
    phone: TEL,
    input_code: code
  };
  console.log(info);
  _this.$axios({
    method: 'post',
    url: 'http://121.199.63.71:9006/login_code/',
    data: info
  }).then((returned) => {
    if (returned.status === 200) {
      if (returned.data.code === 200) {
        common.setCookie("token", returned.data.token);
        _this.$router.replace('/mine')
      }
    }
  })
};
export default {MsgCode, isMsgSuccess, loginOrRegister}
