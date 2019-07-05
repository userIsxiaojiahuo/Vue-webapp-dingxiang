<template>
  <div class="mineNav">
    <div @click="item.checkEvent" class="mineItem" v-for="(item,index) in nav" :key="index">
      <div class="itemLogo">
        <div class="itemLogoWrapper">
          <img class="imgAuto" :src="item.itemImg" alt="">
        </div>
      </div>
      <div class="itemTitle">
        <p>{{item.itemTitle}}</p>
      </div>
      <div class="itemNumber" v-if="minInfo">{{item.cont}}</div>
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
            cont: 0,
            checkEvent: () => {
              this.common.isLogin(this, "myInquiry")
            }
          },
          {
            itemImg: require("../../assets/img/mine/ic_prescription_me.png"),
            itemTitle: "我的处方",
            cont: 0,
            checkEvent: () => {
              this.common.isLogin(this, "myPrescription")
            }
          },
          {
            itemImg: require("../../assets/img/mine/ic_drug_me.png"),
            itemTitle: "药品订单",
            cont: 0,
            checkEvent: () => {
              this.common.isLogin(this, "myDrugOrders")
            }
          },
          {
            itemImg: require("../../assets/img/mine/ic_lecture_me.png"),
            itemTitle: "医师讲堂",
            cont: 0,
            checkEvent: () => {
              this.common.isLogin(this)
            }
          }
        ],
        minInfo: false
      }
    },
    created() {
      this.newVue.$on('mineInfo', (val) => {
        if (val) {
          this.minInfo = true
        } else {
          this.minInfo = false
        }
        this.nav[0].cont = val.focus_doctor;
        this.nav[2].cont = val.my_inquiry;
      })
    }
  }
</script>
