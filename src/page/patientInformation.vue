<template>
  <div class="patientInformation">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxNextBtn :headerReturnTitle="headerReturnTitle"/>
    </dxHeaderReturn>
<!--   已经添加患者信息界面-->
<!--    <patientInformationCon></patientInformationCon>-->
<!--       未添加患者信息界面-->
    <patientInformationFooter></patientInformationFooter>
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
        }
      }
    }
  }
</script>

<style src="./../assets/css/patientInformation.css"></style>
