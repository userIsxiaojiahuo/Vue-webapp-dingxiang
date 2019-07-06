<template>
  <div>
    <!--  顶部更换手机号-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <!--  请输入新的手机号标题-->
    <changePhoneCon :changePhoneCon="newsPhone"></changePhoneCon>
    <!-- 文本框内容-->
    <replacePhoneNum @inputNumber="getInputVal" @clickBtnNext="clickBtnNexts"></replacePhoneNum>
    <!-- 下一步-->
    <changePhoneBtn :repacePhoneNext="repacePhone"
                    :isOk="isOk"
                    class="gain"
                    @click.native="clickBtnNext"
                    :phone="phone"
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
          path: ""
        },
        newsPhone: {
          newsPhoneTit: '请输入新的手机号',
          newsPhoneDesc: '更换手机号后，下次登录可使用新的手机号登录。',
          newPhoneCurrent: '当前手机号：',
          newPhone: this.$route.query.phone
        },
        isOk: false,
        inputValue: "",
        headerReturnTitle: {
          title: "更换手机号"
        },
        phone:0
      }
    },
    methods: {
      getInputVal(data, reg) {
        this.inputValue = data;
        if (this.inputValue !== "") {
          this.isOk = true;
          if (reg.test(this.inputValue)) {
            this.repacePhone.path = "/securiteyCode";
          } else {
            this.repacePhone.path = ""
          }
        } else {
          this.repacePhone.path = "";
          this.isOk = false;
        }
      },
      clickBtnNexts(val){
          this.phone = val;
      },
      clickBtnNext(){
        this.$axios({
          method: 'post',
          url: "http://121.199.63.71:9006/update_phone/",
          data:{
            phone:this.phone
          }
        }).then((Info) => {
          console.log(Info)

        })
      }
    },
    created() {

    }
  }
</script>

<style src="../assets/css/replacePhone.css"></style>
