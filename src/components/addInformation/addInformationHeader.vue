<template>
    <div class="addInformationHeader">
        <div>
          <dxBack></dxBack>
          <slot name="title">
            <h2 class="titleH">添加患者</h2>
          </slot>
        </div>
      <slot name="btn">
        <span class="btn">完成</span>
      </slot>
    </div>
</template>

<script>
  import dxBack from './../public/dxBack'
  import patientTitle from './../patientInformation/patientTitle'
  import patientButton from './../patientInformation/patientButton'
    export default {
        name: "addInformationHeader",
      components:{
        dxBack,
        patientTitle,
        patientButton
      }
    }
</script>

<style scoped>

</style>
