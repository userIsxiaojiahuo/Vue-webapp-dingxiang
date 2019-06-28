<template>
  <div class="patientInformationHeader">
    <div>
      <dxBack></dxBack>
      <slot name="title">
        <h2 class="titleH">患者信息</h2>
      </slot>
    </div>
    <slot name="btn">
      <router-link tag="span" to="/addInformation" class="btn">添加</router-link>
    </slot>
  </div>
</template>

<script>
  import dxBack from './../public/dxBack'
  import patientTitle from './../patientInformation/patientTitle'
  import patientButton from './../patientInformation/patientButton'
  export default {
    name: "patientInformationHeader",
    components: {
      dxBack,
      patientTitle,
      patientButton
    }
  }
</script>

<style scoped>

</style>
