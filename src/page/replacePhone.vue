<template>
  <div>
    <!--  顶部更换手机号-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <!--  请输入新的手机号标题-->
    <changePhoneCon :changePhoneCon="newsPhone"></changePhoneCon>
    <!--    文本框内容-->
    <replacePhoneNum @inputNumber="getInputVal"></replacePhoneNum>
    <!--  下一步-->
    <changePhoneBtn @changeBtnClick="changeBtnClick"
                    :repacePhoneNext="repacePhone"
                    :isOk="isOk"
                    class="gain"
    ></changePhoneBtn>
  </div>
</template>

<script>
  import replacePhoneNum from '../components/phoneNumber/replacePhoneNum'
  import changePhoneBtn from '../components/phoneNumber/changePhoneBtn'
  import changePhoneCon from '../components/phoneNumber/changePhoneCon'
  import dxHeaderReturn from '../components/public/dxHeaderReturn'

  export default {
    name: "replacePhone",
    components: {
      replacePhoneNum,
      changePhoneCon,
      changePhoneBtn,
      dxHeaderReturn
    },
    data() {
      return {
        repacePhone: {
          title: "下一步",
          path: "/securiteyCode"
        },
        newsPhone: {
          newsPhoneTit: '请输入新的手机号',
          newsPhoneDesc: '更换手机号后，下次登录可使用新的手机号登录。',
          newPhoneCurrent: '当前手机号：',
          newPhone: 18703766795
        },
        isOk: false,
        inputValue: "",
        headerReturnTitle: {
          title: "更换手机号"
        }
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
      },
    }
  }
</script>

<style src="../assets/css/replacePhone.css"></style>
