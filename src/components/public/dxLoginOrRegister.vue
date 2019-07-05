<template>
  <div class="loginContent">
    <slot name="register"></slot>
    <!--验证码登录注册-->
    <div class="inputWrapper">
      <!--电话-->
      <div class="inputItem">
        <div class="phoneArea">
          <div class="phonePic">
            <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_phone.png" alt="">
          </div>
          <div class="AreaInputWrapper">
            <input class="AreaInput input" type="text" value="+86">
          </div>
        </div>
        <div class="phoneNumber">
          <input class=" input" autocomplete="off" type="text" maxlength="13" placeholder="11位手机号码"
                 v-model="phoneNumber" @blur="phoneNumberPromptMsg"
                 :class="{inputNumError:promptMSgInfo === '手机号输入格式不正确' && promptMSg===true}">
        </div>
      </div>
      <!--验证密码-->
      <div class="inputItem">
        <div class="phonePic">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_pw.png" alt="">
        </div>
        <div class="AreaInputWrapper">
          <input class="AreaInput input" type="text" maxlength="6" placeholder="6位验证码" v-model="passWordNum"
                 @blur="MsgCodePromptMsg" :class="{inputNumError:promptMSgInfo === '验证码错误' && promptMSg===true}"
                 @input="loginBntOK">
          <dxMsgCode ref="codeBtn" @click.native="getMsgCode" :IsMsgCode="getMsgNum"/>
        </div>
      </div>
      <!--验证码-->
      <div class="noCode">
        <div class="hintInfo" v-show="promptMSg">{{this.promptMSgInfo}}</div>
        <div class="noCodeText">收不到验证码？</div>
      </div>
    </div>
    <!--登录按钮-->
    <slot name="login"></slot>
  </div>
</template>

<script>
  import user from '../../assets/js/user.js'
  import newVue from '../../assets/js/newVue.js'
  import dxMsgCode from '../../components/public/dxMsgCode'

  export default {
    name: "dxLoginOrRegister",
    data() {
      return {
        phoneNumber: '',
        passWordNum: '',
        promptMSgInfo: "",
        getMsgNum: true,
        promptMSg: false,
      }
    },
    components: {
      dxMsgCode
    },
    methods: {
      // 获取验证码
      getMsgCode() {
        console.log(this.phoneNumber.replace(/\s/g, ""));
        if (!this.getMsgNum) {
          if (this.$route.path === '/login') {
            console.log("login");
            user.resend(this.$refs.codeBtn);
            user.MsgCode(this, this.phoneNumber.replace(/\s/g, ""));
          } else if (this.$route.path === '/register') {
            this.$axios.post("http://121.199.63.71:9006/is_exist/", {
              phone: this.phoneNumber.replace(/\s/g, "")
            }).then((returned) => {
              if (returned.status === 200) {
                console.log(returned);
                if (returned.data.code === 400) {
                  this.$toast({
                    position: "bottom",
                    message: "该用户已存在"
                  });
                } else if (returned.data.code === 200) {
                  user.resend(this.$refs.codeBtn);
                  user.MsgCode(this, this.phoneNumber.replace(/\s/g, ""));
                }
              }
            });

          }
        }
      },
      // 手机正则验证提示
      phoneNumberPromptMsg() {
        this.promptMSg = !user.isMsgSuccess(this.phoneNumber.replace(/\s/g, ""));
        this.promptMSgInfo = "手机号输入格式不正确";
      },
      // 短信手机验证提示
      MsgCodePromptMsg() {
        this.passWordNum.length === 6 ? this.promptMSg = false : this.promptMSg = true;
        this.promptMSgInfo = "验证码错误";
        this.$emit("info", {phone: this.phoneNumber.replace(/\s/g, ""), msgCode: this.passWordNum})
      },
      loginBntOK() {
        if (user.isMsgSuccess(this.phoneNumber.replace(/\s/g, "")) && this.passWordNum.length >= 6) {
          newVue.$emit('inputOK', true)
        } else {
          newVue.$emit('inputOK', false)
        }
      }
    },
    watch: {
      phoneNumber(newValue, oldValue) {
        if (newValue.length >= 13 && user.isMsgSuccess(newValue.replace(/\s/g, ""))) {
          this.getMsgNum = false;
        } else {
          this.getMsgNum = true;
        }
        if (newValue.length > oldValue.length) {
          if (newValue.length === 3 || newValue.length === 8) {
            this.phoneNumber += ' ';
          }
        }
      }
    }
  }
</script>

<style src="../../assets/css/loginOrRegister.css"></style>
