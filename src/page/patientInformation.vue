<template>
  <div class="patientInformation">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxNextBtn :headerReturnTitle="headerReturnTitle"/>
    </dxHeaderReturn>
<!--   已经添加患者信息界面-->
    <patientInformationCon v-if="isShow"></patientInformationCon>
<!--       未添加患者信息界面-->
    <patientInformationFooter v-if="isShowDiv"></patientInformationFooter>
    <p>{{login}}</p>
  </div>
</template>

<script>
  import dxHeaderReturn from './../components/public/dxHeaderReturn'
  import dxNextBtn from './../components/public/dxNextBtn'
  import patientInformationFooter from './../components/patientInformation/patientInformationFooter'
  import patientInformationCon from './../components/patientInformation/patientInformationCon'


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
        isShow:false,
        isShowDiv:true,
        login:"未登录"
      }
    },
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
