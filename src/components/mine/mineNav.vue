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
  /**
   * 我的页面-中间导航部分
   */
  export default {
    name: "mineNav",
    data() {
      return {
        nav: [
          {
            itemImg: require("../../assets/img/mine/ic_inquiry_me.png"),
            itemTitle: "我的问诊",
            cont: "0次"
          },
          {
            itemImg: require("../../assets/img/mine/ic_prescription_me.png"),
            itemTitle: "我的处方",
            cont: "0张"
          },
          {
            itemImg: require("../../assets/img/mine/ic_drug_me.png"),
            itemTitle: "药品订单",
            cont: "0单"
          },
          {
            itemImg: require("../../assets/img/mine/ic_lecture_me.png"),
            itemTitle: "医师讲堂",
            cont: "0节"
          }
        ]
      }
    }
  }
</script>
