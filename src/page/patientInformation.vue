<template>
  <div class="patientInformation">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxNextBtn :headerReturnTitle="headerReturnTitle"/>
    </dxHeaderReturn>
    <!--   已经添加患者信息界面-->
    <patientInformationCon v-if="isHaveInfo"/>
    <!--       未添加患者信息界面-->
    <patientInformationFooter v-if="!isHaveInfo"/>
  </div>
</template>

<script>
  import dxHeaderReturn from './../components/public/dxHeaderReturn'
  import dxNextBtn from './../components/public/dxNextBtn'
  import patientInformationFooter from './../components/patientInformation/patientInformationFooter'
  import patientInformationCon from './../components/patientInformation/patientInformationCon'
  import patientInfo from '../assets/js/patientInfo.js'

  export default {
    name: "patientInformation",
    components: {
      dxHeaderReturn,
      patientInformationFooter,
      dxNextBtn,
      patientInformationCon
    },
    data() {
      return {
        headerReturnTitle: {
          title: "患者信息",
          txt: "添加",
          path: "/addInformation"
        },
        isHaveInfo: true,
        patientInfo: "",
        isShow: false,
        isShowDiv: true,
        login: "未登录"
      }
    },
    created() {
      let token = this.common.getCookie("token");
      this.$store.dispatch('GetInfo', true);
      this.$axios({
        method: "get",
        url: 'http://121.199.63.71:9006/patient_list/?token=' + token
      }).then((returned) => {
        if (returned.status === 200) {
          this.$store.dispatch('GetInfo', false);
          if (returned.data.code === 200) {
            console.log(returned);
            if (returned.data.data.length !== 0) {
              this.isHaveInfo = true;
              this.patientInfo = returned.data.data;
            } else {
              this.isHaveInfo = false
            }
          }
        }
      })

    }

    ,
    mounted() {
      // this.$store.dispatch("GetInfo", true);
      // this.$axios.get("http://121.199.63.71:9006/patient_list/").then(data => {
      //   if (data.data.code === 400) {
      //     this.isShow = false;
      //     this.isShowDiv=false;
      //     this.$store.dispatch("GetInfo", false);
      //     this.login= data.data.msg
      //   }
      // })
    }

  }
</script>

<style src="./../assets/css/patientInformation.css"></style>
