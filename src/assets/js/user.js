// 获取验证码
const getMsgCode = (_this, codeInfo) => {
  _this.$axios({
    method: 'post',
    url: 'http://10.35.162.90:9006/send_code/',
    data: codeInfo
  }).then((returned) => {
    if (returned.data.code === 200) {
      this.$toast('短信发送成功')
    }
  })
};
// 改变样式
const addInputColor = (_this) => {
  
};
export default {getMsgCode, addInputColor}

