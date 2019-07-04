<template>
  <div class="box">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
    <PopularizationCouncil :councilMsg="councilMsg"/>
    <PopularizationTopic :topicMsg="topicMsg"/>
    <PopularizationAuthor :authorMsg="authorMsg"/>



    <PopularizationPicture :picMsg="picMsg"/>

    <PopularizationArticletitle :articMsg="articMsg"/>

    <PopularizationMainbody :mainMsg="mainMsg"/>

    <PopularizationArticletitle :articMsg="articMess"/>
    <PopularizationMainbodtwo :mainMsgT="mainMsgT"/>

    <PopularizationArticletitle :articMsg="articMesss"/>

    <PopularizationMainbodthree :mainMsgg="mainMsgg"/>




    <PopularizationCopyright :copyMsg="copyMsg"/>
    <PopularizationShare :shareMsg="shareMsg"/>
    <PopularizationMore :moreMsg="moreMsg"/>
    <PopularizationMore :moreMsg="moreMsgg"/>
  </div>

</template>

<script>
  //头部
  import dxHeaderReturn from '../components/public/dxHeaderReturn'
  //委员会
  import PopularizationCouncil from "../components/popularization/popularizationCouncil"
  //文章标题
  import PopularizationTopic from "../components/popularization/popularizationTopic"
  //作者信息
  import PopularizationAuthor from "../components/popularization/popularizationAuthor"



  //疾病图片
  import PopularizationPicture from "../components/popularization/popularizationPicture"
  //文章标题
  import PopularizationArticletitle from "../components/popularization/popularizationArticletitle"
  //正文1
  import PopularizationMainbody from "../components/popularization/popularizationMainbody"
  //正文2
  import PopularizationMainbodtwo from "../components/popularization/popularizationMainbodtwo"
  //正文3
  import PopularizationMainbodthree from "../components/popularization/popularizationMainbodthree"





  //版权
  import PopularizationCopyright from "../components/popularization/popularizationCopyright"
  //分享
  import PopularizationShare from "../components/popularization/popularizationShare"
  //相关推荐
  import PopularizationMore from "../components/popularization/popularizationMore"

  export default {
    name: "Popularization",
    components: {
      dxHeaderReturn,
      PopularizationCouncil,
      PopularizationTopic,
      PopularizationAuthor,
      PopularizationPicture,
      PopularizationArticletitle,
      PopularizationMainbody,
      PopularizationMainbodtwo,
      PopularizationMainbodthree,
      PopularizationCopyright,
      PopularizationShare,
      PopularizationMore
    },
    data() {
      return {
        // 头部
        headerReturnTitle: {
          title: "科普文章"
        },
        //组委会
        councilMsg:
          {
            tit: "丁香医生审稿专业委员会"
          }
        ,
        //文章标题
        topicMsg: {
          tit: "哮喘发作，该怎么办？"
        }
        ,
        //作者信息
        authorMsg: {
          img: require("../assets/img/illness/timg.jpg"),
          name:
            "蔡青青"
        }
        ,
        //疾病图片
        picMsg: {
          img: require("../assets/img/illness/xc.png")
        }
        ,
        //文章标题
        articMsg: {
          tit: "哮喘发作时有什么表现？"
        }
        ,
        articMess: {
          tit: "哮喘发作时怎么办？"
        }
        ,
        articMesss: {
          tit: "怎样预防哮喘发作？"
        }
        ,
        //正文
        mainMsg: {
          txt: "哮喘发作可急可缓，大多数会表现出焦虑、压抑或恐慌的情绪，呼吸短促、咳嗽、喘息，脸色苍白且出汗，嘴唇、耳垂和手指头会因缺氧而发紫，更严重时，患者会不省人事。"
        }
        ,
        //正文2
        mainMsgT: {
          pOne: "必须首先拨打 120 急救电话。",
          pTwo:
            "等待救护车时，根据患者的情况，进行必要的急救措施。",
          navs:
            [
              {
                liOne: "病人意识不清楚时",
                liNavs: [
                  "1", "2", "3", "4"
                ]
              },
              {

                liOne: "病人意识清楚时",
                liNavs: [
                  "1", "2", "3", "4"
                ]
              }
            ],
          attention:
            "注意：症状严重时，病人可能会不断吸入喷雾剂，但过量使用药物也可能危及生命，应当保持与 120 医生的电话联系，获得指导。"
        }
        ,
        //正文3
        mainMsgg: {
          p: "一旦确诊为哮喘，要有长期跟疾病战斗的准备。",
          navs:
            [
              {
                text: "1111",
                nav: [
                  "注意：症状严重时，病人可能会不断吸入喷雾剂，但过量使用药物也可能危及生命，应当保持与 120 医生的电话联系，获得指导。",
                  "注意：症状严重时，病人可能会不断吸入喷雾剂，但过量使用药物也可能危及生命，应当保持与 120 医生的电话联系，获得指导。",
                ]
              },
              {
                text: "2222",
                nav: [
                  "注意：症状严重时，病人可能会不断吸入喷雾剂，但过量使用药物也可能危及生命，应当保持与 120 医生的电话联系，获得指导。",
                ]
              },
              {
                text: "3333",
                nav: [
                  "注意：症状严重时，病人可能会不断吸入喷雾剂，但过量使用药物也可能危及生命，应当保持与 120 医生的电话联系，获得指导。",
                ]
              },
              {
                text: "4444",
                nav: [
                  "注意：症状严重时，病人可能会不断吸入喷雾剂，但过量使用药物也可能危及生命，应当保持与 120 医生的电话联系，获得指导。",
                ]
              }
            ]
        }
        ,
        //版权
        copyMsg: {
          po: "丁香园版权所有，未经许可不得转载",
          pt:
            "图片设计：一颗星",
          icon:
            require("../assets/img/illness/dxys_launcher_round.png"),
          name:
            "丁香医生审稿专业委员会",
          time:
            "2015年03月同行评议通过",
          iconn:
            require("../assets/img/illness/ic_inquisition_arrow.png")
        }
        ,
        //分享
        shareMsg: {
          ico: require("../assets/img/illness/ic_zan_n.png"),
          icon:
            require("../assets/img/illness/share_weixin.png"),
          iconn:
            require("../assets/img/illness/share_penyouquan.png"),
          iconnn:
            require("../assets/img/illness/share_weibo.png"),
          tit:
            "有帮助",
          num:
            "(40)"
        }
        ,
        //推荐文章
        moreMsg: {
          tit: "推荐文章",
          navs:
            [
              "儿童支气管哮喘", "任时光匆匆流去，哮喘依然不容忽视", "支气管哮喘", "治疗哮喘常见的7个误区，看这篇就够了！"
            ],
          moree:
            "更多相关文章",
          iconnn:
            require("../assets/img/illness/ic_inquisition_arrow.png")
        }
        ,
        //复用推荐话题
        moreMsgg: {
          tit: "推荐话题",
          navs:
            [
              "呼吸科"
            ]
        }
      }
    }
  }
</script>

<style scoped>

</style>
