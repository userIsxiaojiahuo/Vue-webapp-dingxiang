<template>
  <div class="popupsContentWrapper">
    <div class="popupsItem">
      <div class="popupsContent">
        <div class="popupsLogoWrapper">
          <img class="imgAuto" :src="popupsInfo.img" alt="">
        </div>
        <div class="popupsInfo">
          <h3 class="popupsTitle">{{popupsInfo.title}}</h3>
          <p class="popupsText">{{popupsInfo.popupsText}}</p>
        </div>
        <dxRightArrows/>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 问诊页面-主体部分
   */
  import dxRightArrows from '../../public/dxRightArrows'

  export default {
    name: "popupsContent",
    components: {
      dxRightArrows
    },
    props: ['popupsInfo']
  }
</script>

<style scoped>
  .popupsContentWrapper {
    width: 100%;
    padding: 35px 45px 0;
  }

  .popupsContent {
    width: 660px;
    height: 223px;
    border: 1px solid #efefef;
    border-radius: 10px;
    box-shadow: 0 5px 10px #cdcdcd;
    display: flex;
    align-items: center;
    padding: 0 36px;
  }

  .popupsLogoWrapper {
    width: 108px;
    height: 108px;
    margin-right: 26px;
  }

  .popupsInfo {
    flex: 1;
    height: 108px;
    line-height: 1;
    padding: 18px 0;
  }

  .popupsText {
    font-size: 26px;
    color: #999999;
    line-height: 1;
    margin-top: 20px;
  }

</style>
