<template>
  <div>
    <!--    文本框内容-->
    <dxHeaderReturn :headerReturnTitle="headerMessage"></dxHeaderReturn>
    <!--  请输入新的手机号-->
    <changePhoneCon :changePhoneCon="newsPhone"></changePhoneCon>
    <!--    文本框内容-->
    <gainCode @inputNumber="getInputVal" @inputNumbers="inputNumbers"></gainCode>
    <!--  下一步-->
    <changePhoneBtn :repacePhoneNext="repacePhoneNext"
                    :isOk="isOk"
                    class="gain"
                    @click.native="clickCodeBtn"
    ></changePhoneBtn>
    <!--    收不到验证码-->
    <notReceiveCode></notReceiveCode>
  </div>
</template>

<script>
  import common from "../assets/js/common.js"
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
          path: "",
        },
        headerMessage: {
          title: "填写验证码",
        },
        newsPhone: {
          newsPhoneTit: '输入验证码',
          newsPhoneDesc: '',
          newPhoneCurrent: '验证码已发送至:',
          newPhone: this.$route.query.phone
        },
        isOk: false,
        inputCode: 0
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
			inputNumbers(val){
				this.inputCode = val;
			},
      //输入手机号点击按钮，发送请求
      clickCodeBtn() {
        let token = common.getCookie("token");
				let tar = this;
				console.log(this.inputCode,this.newsPhone.newPhone,token);
				let url = "http://121.199.63.71:9006/change_phone/?token="+token
        this.$axios.post(url, {
          phone: tar.newsPhone.newPhone,
          input_code: tar.inputCode
        }).then((Info) => {
					if(Info.data.code == 200){
						tar.$router.push({
							path:"/setting",
							query:{
								ggPhone:tar.newsPhone.newPhone
							}
						})
					}
          console.log(Info)
        })
      }
    },
    created() {
      this.newsPhone.newPhone = this.$route.query.phone;
    }
  }
</script>
<style src="../assets/css/replacePhone.css"></style>
