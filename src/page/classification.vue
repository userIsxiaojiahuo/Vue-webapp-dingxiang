<template>
  <div class="ification">
    <!--复用-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxHeaderIconWrap/>
    </dxHeaderReturn>
    <PopularizationCouncil :councilMsg="councilMsg"/>
    <PopularizationTopic :popuMessage="councilMsg"/>
    <ClassificationAuthor :authorMsg="councilMsg"/>
    <!--新的-->
    <ClassificationDirecting :direcMsg="councilMsg"/>
    <!--请求回来的数据-->
    <div>
      <div v-for="(item,index) in classiFicationMessage.article" :key="index">
        <!--图片标题-->
        <ClassificationTit :title="item.title"/>
        <!--每组12张图片-->
        <ClassificationOther :classiFicationMessageImg="item.article_info"/>
      </div>
    </div>
    <ClassificationQuestion :questionMsg="questionMsg"/>
    <!--复用-->
    <PopularizationCopyright :copyMsg="copyMsg"/>
    <PopularizationShare :shareMsg="shareMsg"/>
    <PopularizationMore :moreMsg="classiFicationMessage.recom_article"/>
  </div>
</template>

<script>
  //复用
  //头部
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxHeaderIconWrap from "../components/public/dxHeaderIconWrap"
  //委员会
  import PopularizationCouncil from "../components/popularization/popularizationCouncil"
  //文章标题
  import PopularizationTopic from "../components/popularization/popularizationTopic"
  //作者信息
  import ClassificationAuthor from "../components/classification/classificationAuthor"
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
   *疾病大全
   */
  export default {
    name: "classification",
    components: {
      dxHeaderReturn,
      PopularizationCouncil,
      PopularizationTopic,
      ClassificationAuthor,
      // 新的
      ClassificationDirecting,
      ClassificationTit,
      ClassificationOther,
      ClassificationQuestion,
      //复用
      PopularizationCopyright,
      PopularizationShare,
      PopularizationMore,
      dxHeaderIconWrap
    },
    data() {
      return {
        //组委会
        councilMsg: {
          tit: "丁香医生审稿专业委员会通过",
          title: "收好这 36 个应急锦囊，遇到小病不再慌，值得分享",
          img:require("../assets/img/illness/timg.jpg"),
          auth: "丁香医生",
          subjection: "健康科普平台",
          text: "点击下方任一图片，即可查看对应处理办法。",
          oneRmb:require("../public/img/bg_app_bottom.png")
        },
        classiFicationMessage:{},
        //1元问医生
        questionMsg: {
          img: require("../assets/img/illness/im_strict_review_inquiry_action.png"),
          name: "责任编辑 : 丁香医生"
        },
        //复用
        //版权
        copyMsg: {
          po: "丁香园版权所有，未经许可不得转载",
          pt: "图片设计：一颗星",
          icon: require("../assets/img/illness/dxys_launcher_round.png"),
          name: "丁香医生审稿专业委员会",
          time: "2015年03月同行评议通过",
          iconn: require("../assets/img/illness/ic_inquisition_arrow.png")
        },
        //分享
        shareMsg: {
          ico: require("../assets/img/illness/ic_zan_n.png"),
          icon: require("../assets/img/illness/share_weixin.png"),
          iconn: require("../assets/img/illness/share_penyouquan.png"),
          iconnn: require("../assets/img/illness/share_weibo.png"),
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
          iconnn: require("../assets/img/illness/ic_inquisition_arrow.png")
        },
        //复用推荐话题
        moreMsgg: {
          tit: "推荐话题",
          navs: [
            "呼吸科"
          ]
        },
        headerReturnTitle: {
          title: "科普文章"
        }
      }
    },
    created() {
      this.$store.dispatch("GetInfo", true);
      this.$axios.get("http://121.199.63.71:9006/science_article/").then(data => {
        console.log(data)
        if (data.data.code === 206) {
          this.$store.dispatch("GetInfo", false);
          this.classiFicationMessage = data.data.data;
          console.log(this.classiFicationMessage)
        }
      })
    }
  }
</script>

<style scoped>
  .ification{
    padding-bottom: 200px;
  }
</style>
