<template>
  <div>
    <!--复用-->
    <ParticularsHeader :headerMag="headerMag"/>
    <PopularizationCouncil :councilMsg="councilMsg"/>
    <PopularizationTopic :topicMsg="topicMsg"/>
    <PopularizationAuthor :authorMsg="authorMsg"/>
    <!--新的-->
    <ClassificationDirecting :direcMsg="direcMsg"/>
    <ClassificationTit :titMsg="titMsg"/>
    <ClassificationOther :otherMsg="otherMsg"/>
    <ClassificationQuestion :questionMsg="questionMsg"/>
    <!--复用-->
    <PopularizationCopyright :copyMsg="copyMsg"/>
    <PopularizationShare :shareMsg="shareMsg"/>
    <PopularizationMore :moreMsg="moreMsg"/>
    <PopularizationMore :moreMsg="moreMsgg"/>
  </div>
</template>

<script>
  //复用
  //头部
  import ParticularsHeader from "../components/particulars/particularsHeader"
  //委员会
  import PopularizationCouncil from "../components/popularization/popularizationCouncil"
  //文章标题
  import PopularizationTopic from "../components/popularization/popularizationTopic"
  //作者信息
  import PopularizationAuthor from "../components/popularization/popularizationAuthor"
  //新的
  //指路
  import ClassificationDirecting from "../components/classification/classificationDirecting"
  //文章标题
  import ClassificationTit from "../components/classification/classificationTit"
  //疾病分类图片
  import ClassificationOther from "../components/classification/classificationOther"
  //1元问医生
  import ClassificationQuestion from "../components/classification/classificationQuestion"
  //复用
  //版权
  import PopularizationCopyright from "../components/popularization/popularizationCopyright"
  //分享
  import PopularizationShare from "../components/popularization/popularizationShare"
  //相关推荐
  import PopularizationMore from "../components/popularization/popularizationMore"

  /**
   *
   */
  export default {
    name: "classification",
    components: {
      ParticularsHeader,
      PopularizationCouncil,
      PopularizationTopic,
      PopularizationAuthor,
      // 新的
      ClassificationDirecting,
      ClassificationTit,
      ClassificationOther,
      ClassificationQuestion,
      //复用
      PopularizationCopyright,
      PopularizationShare,
      PopularizationMore
    },
    data() {
      return {
        // 头部
        headerMag: {
          tit: "科普文章",
          icon: require("../public/img/ic_titlebar_back.png"),
          iconn: require("../public/img/abc_ic_star_black_36dp.png"),
          iconnn: require("../public/img/ic_titlebar_share.png")
        },
        //组委会
        councilMsg: {
          tit: "丁香医生审稿专业委员会通过"
        },
        //文章标题
        topicMsg: {
          tit: "收好这 36 个应急锦囊，遇到小病不再慌，值得分享"
        },
        //作者信息
        authorMsg: {
          img: require("../public/img/timg.jpg"),
          name: "丁香医生",
          platform: "健康科普平台"
        },
        //新的
        //指路
        direcMsg: {
          tit: "点击下方任一图片，即可查看对应处理办法。"
        },
        //文章标题
        titMsg: {
          tit: "身体常见不适"
        },
        //疾病分类图片
        otherMsg: {
          img: [
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
            require("../public/img/picture.png"),
          ]

        },
        //1元问医生
        questionMsg: {
          img: require("../public/img/im_strict_review_inquiry_action.png"),
          name: "责任编辑 : 丁香医生"
        },
        //复用
        //版权
        copyMsg: {
          po: "丁香园版权所有，未经许可不得转载",
          pt: "图片设计：一颗星",
          icon: require("../public/img/dxys_launcher_round.png"),
          name: "丁香医生审稿专业委员会",
          time: "2015年03月同行评议通过",
          iconn: require("../public/img/ic_inquisition_arrow.png")
        },
        //分享
        shareMsg: {
          ico: require("../public/img/ic_zan_n.png"),
          icon: require("../public/img/share_weixin.png"),
          iconn: require("../public/img/share_penyouquan.png"),
          iconnn: require("../public/img/share_weibo.png"),
          tit: "有帮助",
          num: "(40)"
        },
        //推荐文章
        moreMsg: {
          tit: "推荐文章",
          navs: [
            "儿童支气管哮喘", "任时光匆匆流去，哮喘依然不容忽视", "支气管哮喘", "治疗哮喘常见的7个误区，看这篇就够了！"
          ],
          moree: "更多相关文章",
          iconnn: require("../public/img/ic_inquisition_arrow.png")
        },
        //复用推荐话题
        moreMsgg: {
          tit: "推荐话题",
          navs: [
            "呼吸科"
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>
