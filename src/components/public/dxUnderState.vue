<template>
  <div class="underState">
    <div class="UnderImgWrapper">
      <img src="../../assets/img/mine/ic_font_title.png" alt="">
    </div>
    <div class="mineUnderText">
      <div class="doctorIcon" v-for="(item) in underInfo">
        <img :src="item.icon" alt="">
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 页面下方说明
   */
  export default {
    name: "dxUnderState",
    data() {
      return {
        underInfo: [
          {
            icon: "./static/mine/img/ic_doctors_little_grey.png",
            text: "三甲以上主治医师"
          },
          {
            icon: "./static/mine/img/ic_review_little_grey.png",
            text: "专家团队 双重审核"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .underState {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f4f4f4;
  }

  .UnderImgWrapper > img {
    width: 210px;
    height: 24px;
  }

  .mineUnderText {
    display: flex;
    margin-top: 20px;
  }

  .mineUnderText img {
    width: 26px;
    height: 28px;
    margin: 0 10px;
  }

  .doctorIcon {
    display: flex;
    font-size: 24px;
    color: #999999;
    align-items: center;

  }
</style>
