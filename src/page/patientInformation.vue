<template>
  <div class="patientInformation">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxNextBtn :headerReturnTitle="headerReturnTitle"/>
    </dxHeaderReturn>
    <patientInformationFooter></patientInformationFooter>
  </div>
</template>

<script>
  import dxHeaderReturn from './../components/public/dxHeaderReturn'
  import dxNextBtn from './../components/public/dxNextBtn'
  import patientInformationFooter from './../components/patientInformation/patientInformationFooter'

  export default {
    name: "patientInformation",
    components: {
      dxHeaderReturn,
      patientInformationFooter,
      dxNextBtn
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
