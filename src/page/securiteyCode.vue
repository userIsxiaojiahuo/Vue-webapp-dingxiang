<template>
  <div>
    <!--    文本框内容-->
    <dxHeaderReturn :headerReturnTitle="headerMessage"></dxHeaderReturn>
    <!--  请输入新的手机号-->
    <changePhoneCon :changePhoneCon="newsPhone"></changePhoneCon>
    <!--    文本框内容-->
    <gainCode @inputNumber="getInputVal"></gainCode>
    <!--  下一步-->
    <changePhoneBtn :repacePhoneNext="repacePhoneNext"
                    @changeBtnClick="changeBtnClick"
                    :isOk="isOk"
                    class="gain"
    ></changePhoneBtn>
    <!--    收不到验证码-->
    <notReceiveCode></notReceiveCode>
  </div>
</template>

<script>
  import changePhoneBtn from '../components/phoneNumber/changePhoneBtn'
  import changePhoneCon from '../components/phoneNumber/changePhoneCon'
  import gainCode from '../components/phoneNumber/gainCode'
  import notReceiveCode from '../components/phoneNumber/notReceiveCode'
  import dxHeaderReturn from '../components/public/dxHeaderReturn'

  export default {
    name: "securiteyCode",
    components: {
      changePhoneCon,
      gainCode,
      changePhoneBtn,
      notReceiveCode,
      dxHeaderReturn
    },
    data() {
      return {
        repacePhoneNext: {
          title: "确认",
          path: "/home",
        },
        headerMessage: {
          title: "填写验证码",
        },
        newsPhone: {
          newsPhoneTit: '输入验证码',
          newsPhoneDesc: '',
          newPhoneCurrent: '验证码已发送至:',
          newPhone: 18703766795
        },
        isOk: false
      }
    },
    methods: {
      getInputVal(data) {
        // console.log(data);
        this.inputValue = data;
        if (this.inputValue !== "") {
          this.isOk = true
        } else {
          this.isOk = false
        }

      },
      changeBtnClick() {
        // alert(this.inputValue)
      }
    }
  }
</script>
<style src="../assets/css/replacePhone.css"></style>
