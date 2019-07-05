<template>
  <div class="listDivCon">
    <!--医院信息-->
    <div class="messageText" @click="toHospaital(hospitalMess.id)">
      <i v-if="messageImg.isShowHeaderImg"
         :style="{background:'url('+messageImg.nameImg+')',backgroundSize:'cover'}"></i>
      <h3>
        <p :class="messageImg.isShowHeaderImg?'meName':'meNameBolder'">{{hospitalMess.hosp_name}}</p>
      </h3>
      <ul>
        <li :class="messageImg.isShowHeaderImg?'listUls':'acive'">
          {{hospitalMess.hosp_level}}
        </li>
        <li :class="messageImg.isShowHeaderImg?'listUls':'acive'">
          {{hospitalMess.medical_insurance}}
        </li>
      </ul>
    </div>
    <!--医院地址-->
    <div class="messageText" @click="intoHospital">
      <i :style="{background:'url('+messageImg.addressImg+')', backgroundSize:'cover'}"></i>
      <h3>
        <p class="meName nameNowrap">{{hospitalMess.hosp_addr}}</p>
      </h3>
    </div>

    <!--医院电话-->
    <div class="messageText">
      <i :style="{background:'url('+messageImg.phoneImg+')', backgroundSize:'cover'}"></i>
      <h3 @click.stop="handleShowPopup">
        <p class="meName">联系电话</p>
        <p class="mePhone">{{hospitalMess.hosp_tel}}</p>
      </h3>
      <van-popup
        type="primary"
        v-model="isShowPopup"
        position="bottom"
        :style="{ height: 'auto' }"
      >
        <div class="messListFooter">
          <p>请点击号码，立即拨打电话</p>
          <p class="phonePDom" @click="handleShowPopupPDom(hospitalMess.hosp_tel)" v-for="item in phoneArr">
            {{item}}</p>
          <div class="messListFooterCancel" @click="handleShowPopupCancel">
            <div class="messListFooterCancelText">
              取消
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
  import {Popup, Dialog} from 'vant';

  export default {
    name: "messageList",
    props: ["isShowHospital", "hospitalMess", "messageImg"],
    data() {
      return {
        isShowPopup: false,
        phoneArr: []
      }
    },
    components: {
      "van-popup": Popup
    },
    methods: {
      intoHospital() {
        this.$router.push({
          path: "/hospitalMap",
          query: {
            hospitalSite: this.hospitalMess.hosp_addr
          }
        });
      },
      toHospaital(id) {
        this.$router.push({
          path: "/hospitalMessage",
          query: {
            id: id
          }
        });
      },
      handleShowPopup() {
        this.isShowPopup = true
      },
      handleShowPopupCancel() {
        this.isShowPopup = false
      },
      handleShowPopupPDom(tallId) {
        this.isAlert = true;
        // this.$dialog.alert({
        //     message: '该设备没有电话模块'
        // }).then(() => {
        //     this.isShowPopup = false
        // });
        this.isShowPopup = false;
        let str = tallId;
        let phone = str.split(";");
        window.location.href = 'tel://' + tallId;
      }
    },
    created() {
      this.phoneArr = this.hospitalMess.hosp_tel.split(';');
    }
  }
</script>

<style scoped>

  .messageText {
    padding-left: 80px;
    border-bottom: 1px solid #ebebeb; /*no*/
    line-height: 100px;
    padding-right: 30px;
    position: relative;
    background: url("../../../assets/images/askdoctor/hospitalInfo/hcp_into.png") no-repeat 680px center;
    background-size: 16px 24px;
  }


  .messageText > i {
    display: inline-block;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 20px;
    left: 0;
  }

  .messageText > ul {
    overflow: hidden;
    padding: 0 0 10px 0;
  }

  .listUls {
    float: left;
    padding: 0 13px 0 13px;
    margin-right: 16px;
    line-height: 40px;
    border: 1px solid #bfeae4; /*no*/
    font-size: 20px;
    color: #3aa798;
    border-radius: 50px;
    /*height: 100%;*/
  }

  .acive {
    float: left;
    padding: 0 13px 0 35px;
    margin-right: 30px;
    line-height: 40px;
    font-size: 20px;
    color: #666666;
    border-radius: 50px;
    background: url("../../../assets/images/askdoctor/doctorInfo/ic_tag.png") left center no-repeat;
    background-size: 26px 26px;
  }

  .listUls {
    float: left;
    padding: 0 13px 0 13px;
    margin-right: 16px;
    line-height: 40px;
    border: 1px solid #bfeae4; /*no*/
    font-size: 20px;
    color: #3aa798;
    border-radius: 50px;
    min-height: 40px;
  }

  .acive {
    float: left;
    padding: 0 13px 0 35px;
    margin-right: 30px;
    line-height: 40px;
    font-size: 20px;
    color: #666666;
    border-radius: 50px;
    background: url("../../../assets/images/askdoctor/doctorInfo/ic_tag.png") left center no-repeat;
    background-size: 26px 26px;
    min-height: 40px;
  }

  .meName {
    font-size: 26px;
    color: #333333;
    display: inline-block;
  }

  .meNameBolder {
    font-weight: bolder;
    font-size: 34px;
    color: #202020;
  }

  .mePhone {
    float: right;
    margin-bottom: 10px;
    font-size: 20px;
    color: #999999;
    letter-spacing: 0;
    margin-right: 38px;
  }

  .nameNowrap {
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .messListFooter p {
    text-align: center;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ededed;
    padding: 0 20px;
  }

  .messListFooterCancel {
    text-align: center;
    padding-top: 10px;
    background: #ededed;
  }

  .phonePDom {
    color: #3aa798;
  }

  .messListFooterCancelText {
    background: white;
  }
</style>

