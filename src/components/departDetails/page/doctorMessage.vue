<template>
  <div class="doctorsMessage">
    <div class="doctorMess" @click="toDoctorMessage" v-for="(item,index) in doctorMessages" :key="index">
      <div class="messageLeft">
        <div class="headerImg">
          <img :src="item.headerImg" alt="">
        </div>
        <!--力荐-->
        <dxHighlyRecomIcon/>
      </div>
      <div class="messageRight">
        <div class="messageName">
          <span class="doctorName">{{item.name}}</span>
          <span class="rank">{{item.rank}}</span>
        </div>
        <p class="doctorMessPdom">
          <span class="rank">{{item.department}}</span>
          <span class="rank hospitalAddress">{{item.hospitalAddress}}</span>
        </p>
        <p class="doctorMessPdom beGoodAt">
          擅长:{{item.beGoodAt}}
        </p>
        <div class="achievement">
          <span class="starLevel">{{item.starLevel}}</span>
          <span class="doctorSpanDom monthNum">月回答{{item.monthNum}}</span>
          <span class="doctorSpanDom monthRecipe" v-if="item.isMonthRecipe">月处方{{item.monthRecipe}}</span>
          <span class="doctorSpanDom upTime">{{item.upTime}}分钟响应</span>
        </div>
        <div class="representative" v-if="item.isDesignation">
          {{item.honor}}
        </div>
        <div class="bidPrice">
          <div class="price">
            <span class="spanText imgPrice">图片￥{{item.imgPrice}}</span>
            <span class="spanText priceRule" v-if="item.isPhone">|</span>
            <span class="spanText phonePrice" v-if="item.isPhone">电话￥{{item.phonePrice}}</span>
          </div>
          <img v-if="item.isAskImg" src="../../../assets/images/askdoctor/doctors/ask_doctor.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dxHighlyRecomIcon from '../../../components/public/dxHighlyRecomIcon'

  export default {
    name: "doctorMessage",
    props: {
      doctorMessages: {
        type: Array
      }
    },
    methods: {
      toDoctorMessage() {
        this.$router.push({
          path: "/doctorInfo"
        })
      }
    },
    components: {
      dxHighlyRecomIcon
    }
  }
</script>

<style scoped>

  .doctorMess {
    display: flex;
    padding-top: 44px;
    overflow: hidden;
    border-bottom: 1px solid #ebebeb; /*no*/
    padding-bottom: 56px;
  }

  .messageLeft {
    float: left;
    position: relative;
    margin-right: 25px;
  }

  .headerImg > img {
    width: 90px;
    height: 90px;
  }

  .messageLeft > i {
    display: block;
    width: 88px;
    height: 40px;
    margin-top: 12px;
  }

  .messageRight {
    float: right;
    padding-right: 30px;
  }

  .doctorName {
    font-size: 28px;
    font-weight: 700;
    color: #333333;
    padding-right: 10px;
  }

  .rank {
    font-size: 20px;
    color: #666666;
  }

  .hospitalAddress {
    margin-left: 10px;
  }

  .doctorMessPdom {
    line-height: 46px;
    /*margin: 20px 0 20px 0;*/

  }

  .beGoodAt {
    display: -webkit-box;
    /*overflow: hidden;*/
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* autoprefixer: on */
    font-size: 22px;
    color: #999999;
  }

  .achievement {
    display: flex;
  }

  .starLevel {
    width: 65px;
    display: inline-block;
    background: url("../../../assets/images/askdoctor/doctors/s_icon_rating_star_d.png") no-repeat left center;
    background-size: 25px 25px;
    padding-left: 25px;
    color: #ffb60b;
    font-size: 12px;
  }

  .doctorSpanDom {
    font-size: 22px;
    color: #666666;
  }

  .monthNum {
    padding: 0 10px 0 10px;
  }

  .upTime {
    padding-left: 12px;
  }

  .representative {
    height: 50px;
    background: url("../../../assets/images/askdoctor/doctors/ry_img.png") no-repeat left center;
    background-size: 246px 50px;
    text-indent: 38px;
    line-height: 50px;
    font-size: 20px;
    color: #219c8b;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .bidPrice {
    display: flex;
    justify-content: space-between;
  }

  .bidPrice > .price {
    padding-top: 15px;
  }

  .bidPrice > img {
    width: 142px;
    height: 64px;
  }

  .spanText {
    font-size: 24px;
    color: #6f7580;
    font-weight: bolder;
  }

  .priceRule {
    margin: 0 20px 0 20px;
    color: #ebebeb;
    font-weight: 100;
  }
</style>
