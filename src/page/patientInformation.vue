<template>
  <div class="patientInformation">
    <patientInformationHeader></patientInformationHeader>
    <patientInformationFooter></patientInformationFooter>
  </div>
</template>

<script>
  import patientInformationHeader from './../components/patientInformation/patientInformationHeader'
  import patientInformationFooter from './../components/patientInformation/patientInformationFooter'

  export default {
        name: "patientInformation",
      components:{
        patientInformationHeader,
        patientInformationFooter
      }
    }
</script>

<style src="./../assets/css/patientInformation.css"></style>
