<template>
  <div class="mineNav">
    <router-link :to="item.path" tag="div" class="mineItem" v-for="(item,index) in nav" :key="index">
      <div class="itemLogo">
        <div class="itemLogoWrapper">
          <img class="imgAuto" :src="item.itemImg" alt="">
        </div>
      </div>
      <div class="itemTitle">
        <p>{{item.itemTitle}}</p>
      </div>
      <div class="itemNumber" v-if="false">{{item.cont}}</div>
    </router-link>
  </div>
</template>p

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
            cont: this.mineInfo.my_inquiry + "次",
            path: "myInquiry"
          },
          {
            itemImg: require("../../assets/img/mine/ic_prescription_me.png"),
            itemTitle: "我的处方",
            cont: this.mineInfo.my_recipel + "张",
            path: "myPrescription"
          },
          {
            itemImg: require("../../assets/img/mine/ic_drug_me.png"),
            itemTitle: "药品订单",
            cont: this.mineInfo.collect_content + "单",
            path: "myDrugOrders"
          },
          {
            itemImg: require("../../assets/img/mine/ic_lecture_me.png"),
            itemTitle: "医师讲堂",
            cont: this.mineInfo.focus_doctor + "节",
            path: "myInquiry"
          }
        ]
      }
    },
    props: ['mineInfo']
  }
</script>
