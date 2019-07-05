<template>
  <!--  医生介绍-->
  <div class="diagonseIntroduceWrap">
    <div @click="handleDivToDoctorInfo(item.id)" class="diagonseIntroduce"
         v-for="(item,index) in diagonseIntroduce"
         :key="index">
      <div class="IntroduceImg">
        <img :src="item.doc_img" alt="">
      </div>
      <div class="IntroduceContent">
        <!-- 医生姓名-->
        <p class="doctorName">{{item.doc_name}}<span>{{item.doc_title}}</span>
        </p>
        <!--医院等级 -->
        <div class="hospitalLevel">
          <div class="Grade">三甲</div>
          <div class="Desk">{{item.name}}</div>
          <div class="hospitalName">{{item.hop_name}}</div>
        </div>
        <!--擅长-->
        <div class="adept">
          擅长：{{item.doc_goods}}
        </div>
        <!--星级-->
        <div class="startLevel">
          <img src="../../assets/img/diagonseImg/s_icon_rating_star_d.png" alt="">
          <span class="grade">{{item.d_level}}.0</span>
          <span class="answer"><i>{{item.m_answer}}</i></span>
        </div>
        <!--折扣-->
        <div class="discount">
          <span class="ingText">图文</span>
          <span class="dollar">￥</span>
          <span class="price">{{item.text_price}}</span>
          <div class="dis">
            <span class="disNum">3.6折</span>
            <span class="surplus">仅剩2个名额</span>
          </div>
        </div>
        <!--新人专享-->
        <div class="news">
          <span class="newsIcon">新</span>
          <span class="newsPrice">新人专享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import {Lazyload} from 'vant';

  export default {
    name: "diagonseIntroduce",
    props: ["diagonseIntroduce"],
    // components: {
    //   "lazy-component": Lazyload
    // }
    // created() {
    //     console.log(this.diagonseIntroduce)
    // },
    methods: {
      handleDivToDoctorInfo(id) {
        this.$router.push(
          {
            path: "/doctorInfo",
            query: {
              id: id
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
  .diagonseIntroduce {
    width: 100%;
    height: 358px;
    display: flex;
    margin-top: 28px;
    border-bottom: 1px solid #ebebeb;
  }

  .IntroduceImg {
    width: 15.74%;
    height: 100%;
    text-align: right;
  }

  .IntroduceImg > img {
    width: 88px;
    height: 88px;
    display: inline-block;
    border-radius: 50%;
  }

  .IntroduceContent {
    width: 84.26%;
    height: 100%;
    padding-left: 20px;
  }

  /*医生姓名*/
  .doctorName {
    font-size: 27px;
    color: #333333;
    line-height: 44px;
  }

  .doctorName > span {
    font-size: 22px;
    color: #666666;
    margin-left: 14px;
  }

  /*医院等级*/
  .hospitalLevel {
    width: 100%;
    height: 44px;
    display: -webkit-flex;
    align-items: center;
    color: #6f7580;
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .hospitalLevel .Grade {
    width: 64px;
    height: 29px;
    background: #6f7580;
    border-radius: 1px; /*no*/
    font-size: 20px;
    color: #fff;
    line-height: 29px;
    text-align: center;
  }

  .hospitalLevel .Desk, .hospitalName {
    margin-left: 14px;
  }

  .hospitalName {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    min-width: 1px;
    padding-right: 30px;
    flex: 1;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
  }

  /*擅长*/
  .adept {
    width: 100%;
    height: 54px;
    font-size: 24px;
    color: #999999;
    line-height: 54px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 44px;
    letter-spacing: 1px; /*no*/
  }

  /*星级*/
  .startLevel {
    width: 100%;
    height: 54px;
    line-height: 54px;
  }

  .startLevel > img {
    width: 27px;
    height: 27px;
    display: inline-block;
    vertical-align: text-top;
  }

  .startLevel .grade {
    font-size: 20px;
    color: #ffa91f;
  }

  .startLevel > span {
    font-size: 20px;
    color: #666666;
  }

  .startLevel > span > i {
    font-style: normal;
    margin-left: 8px;
  }

  /*折扣*/
  .discount {
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
  }

  .discount .ingText {
    font-size: 26px;
    color: #6f7580;
  }

  .discount .dollar, .discount .price {
    font-size: 22px;
    color: #f76260;
  }

  .dis {
    width: 210px;
    line-height: 24px;
    font-size: 18px;
    color: white;
    margin-left: 20px;
    display: flex;
    align-items: center;
    border: 1px solid #f76260; /*no*/
    border-radius: 3px;
  }

  .disNum {
    width: 75px;
    height: 24px;
    background: #f76260;
    text-align: center;
  }

  .surplus {
    flex-shrink: 0;
    color: #f76260;;
    white-space: nowrap;
    letter-spacing: 1px; /*no*/
    text-indent: 6px;
  }

  /*.discount .dis {*/
  /*    width: 175px;*/
  /*    line-height: 24px;*/
  /*    border: 1px solid #f76260; !*no*!*/
  /*    margin-left: 20px;*/
  /*    border-radius: 2px; !*no*!*/
  /*    font-size: 18px;*/
  /*    box-sizing: initial;*/
  /*    color: #f76260;*/
  /*    display: flex;*/
  /*    justify-content: center;*/
  /*}*/

  /*.discount .dis .disNum {*/
  /*    width: 60px;*/
  /*    height: 24px;*/
  /*    background: #f76260;*/
  /*    color: #fff;*/
  /*    border: 1px solid #f76260; !*no*!*/
  /*    text-align: center;*/
  /*    white-space: nowrap;*/
  /*}*/

  /*.surplus {*/
  /*    display: inline-block;*/
  /*    white-space: nowrap;*/
  /*}*/

  /*新人专享*/
  .news {
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
  }

  .news .newsIcon {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    display: block;
    border: 1px solid #f76260; /*no*/
    border-radius: 3px; /*no*/
    color: #f76260;
    font-size: 14px;
  }

  .news .newsPrice {
    font-size: 18px;
    color: #999999;
    margin-left: 9px;
  }
</style>
