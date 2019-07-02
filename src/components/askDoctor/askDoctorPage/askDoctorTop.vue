<template>
  <div class="askDoctorHeader">
    <div class="headerTitle">
      <a class="iconPosition" href="javascript:;" @click="askDoctorGetBack()">
        {{headerMessage.title}}
        <i
          :style="{
                        'background':'url(' + headerMessage.icon + ')' + 'no-repeat',
                        'backgroundSize':'cover'
                        }"
        ></i>
      </a>
      <em @click="showPopup" v-if="headerMessage.show"></em>
      <span v-if="headerMessage.isStartImg"></span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "AskDoctorHeader",
    props: {
      headerMessage: {
        type: Object
      }
    },

  }
</script>

<style scoped>
  .askDoctorHeader {
    width: 100%;
    height: 162px;
    background: #fcfcfc;
    border-bottom: 1px solid #ebebeb; /*no*/
  }

  .headerTitle {
    padding: 75px 0 22px 30px;
    width: 100%;
    line-height: 64px;
    position: relative;
  }


  .iconPosition {
    display: inline-block;
    position: relative;
    padding-left: 44px;
    font-size: 35px;
    color: #000;
    font-weight: bolder;
  }

  .iconPosition > i {
    width: 44px;
    height: 44px;
    position: absolute;
    left: 0;
    top: 8px;
  }

  .headerTitle > em {
    width: 38px;
    height: 38px;
    background: url("../../../assets/images/askdoctor/ic_titlebar_share.png");
    background-size: cover;
    position: absolute;
    right: 30px;
    top: 84px;
  }

  .headerTitle > span {
    width: 38px;
    height: 38px;
    position: absolute;
    right: 105px;
    top: 84px;
    background: url("../../../assets/images/askdoctor/ic_titlebar_start.png");
    background-size: cover;
  }


</style>
