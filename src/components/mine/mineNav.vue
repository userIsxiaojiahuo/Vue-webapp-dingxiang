<template>
  <div class="mineNav">
    <div class="mineItem" v-for="(item,index) in nav" :key="index">
      <div class="itemLogo">
        <div class="itemLogoWrapper">
          <img class="imgAuto" :src="item.itemImg" alt="">
        </div>
      </div>
      <div class="itemTitle">
        <h4>{{item.itemTitle}}</h4>
      </div>
      <div class="itemNumber" v-if="false">{{item.cont}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mineNav",
    data() {
      return {
        nav: [
          {
            itemImg: "./static/mine/img/ic_inquiry_me.png",
            itemTitle: "我的问诊",
            cont: "0次"
          },
          {
            itemImg: "./static/mine/img/ic_prescription_me.png",
            itemTitle: "我的处方",
            cont: "0张"
          },
          {
            itemImg: "./static/mine/img/ic_drug_me.png",
            itemTitle: "药品订单",
            cont: "0单"
          },
          {
            itemImg: "./static/mine/img/ic_lecture_me.png",
            itemTitle: "医师讲堂",
            cont: "0节"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .mineNav {
    width: 100%;
    background: #ffffff;
    display: flex;
  }

  .mineItem {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 32px 0 34px;
  }

  .itemLogoWrapper {
    width: 55px;
    height: 55px;
    margin: 0 auto;

  }

  .itemLogo {
    flex: 1;
    text-align: center;
  }

  .itemTitle {
    text-align: center;
    margin-top: 18px;
    line-height: 1;
    font-size: 26px;
  }

  .itemNumber {
    text-align: center;
    color: #9b9b9b;
    margin-top: 18px;
    line-height: 1;
  }
</style>
