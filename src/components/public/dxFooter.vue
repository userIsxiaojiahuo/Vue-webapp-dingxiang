<template>
  <div>
    <div class="dx_tab">
      <router-link :to="item.path" tag="p" v-for="(item,index) in footerText" :key="index">
        <img :src="item.img" alt="" @click="item.click">
        <span>{{item.title}}</span>
      </router-link>
    </div>
    <div class="popups">
      <van-popup v-model="show" position="bottom"
                 :style="{ height: '100%' }">
        <popupsHeader/>
        <popupsContent v-for="(item,index) in popupsInfo" :key="index" :popupsInfo="item"/>
        <div class="popupsClose" @click="handle">
          <img src="../../assets/img/home/crop__ic_cancel.png" alt="">
        </div>
      </van-popup>
    </div>
  </div>

</template>
<script>
  import {Popup} from 'vant';
  import popupsHeader from '../index/popups/popupsHeader'
  import popupsContent from '../index/popups/popupsContent'

  export default {
    name: 'indexFooter',
    data() {
      return {
        show: false,
        footerText: [
          {
            title: '首页',
            img: require('../../assets/img/home/ic_home_s.png'),
            path: '/home',
            click: () => {
            }
          },
          {
            title: '问诊',
            img: require('../../assets/img/home/ic_inquiry_homepage.png'),
            path: '',
            click: this.showPopup
          },
          {
            title: '我的',
            img: require('../../assets/img/home/ic_mine_n.png'),
            path: '/mine',
            click: () => {
            }
          }
        ],
        popupsInfo: [
          {
            img: require('../../assets/img/home/ic_inquisition_word.png'),
            title: "图文咨询",
            popupsText: "快速匹配医生 平均一小时回复",
            path: '/conPic'
          },
          {
            img: require('../../assets/img/home/ic_inquisition_record.png'),
            title: "电话急诊",
            popupsText: "一对一电话咨询 平均60秒接通",
            path: '/callEmergency'
          },
          {
            img: require('../../assets/img/home/ic_inquisition_doctor.png'),
            title: "问医生",
            popupsText: "按科室挑选合适的医生",
            path: '/askDoctor'
          },
        ]
      }
    },
    components: {
      "van-popup": Popup,
      popupsHeader,
      popupsContent,
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      handle() {
        this.show = false;
      }
    }
  }
</script>

<style scoped>
  .dx_tab {
    width: 100%;
    height: 100px;
    background: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    border-top: 1px solid #eeeeee;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    z-index: 999;
  }

  .dx_tab p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .dx_tab p:first-of-type img {
    width: 54px;
    height: 54px;
  }

  .dx_tab p:nth-of-type(2) span {
    position: absolute;
    bottom: 10px;
  }

  .dx_tab p span {
    font-size: 20px;
    color: #9b9b9b;
  }

  .dx_tab p:nth-of-type(2) img {
    width: 116px;
    height: 116px;
    position: absolute;
    z-index: 999;
    top: -56px;
    /*left: 317px;*/
  }

  .dx_tab p:last-of-type img {
    width: 54px;
    height: 54px;
  }

  .popupsClose {
    width: 100%;
    display: flex;
  }

  .popupsClose > img {
    width: 64px;
    height: 64px;
    margin: 60px auto 0;
  }
</style>
