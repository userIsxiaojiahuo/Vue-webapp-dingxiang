<template>
  <div>
    <ParticularsHeader :headerMag="headerMag"/>
    <ParticularsIntroduce :introMsg="introMsg"/>
    <ParticularsAetiological :particMsg="particMsg"/>
    <ParticularsBtn :btnMsg="btnMsg"/>
    <ParticularsClassification/>
    <!--:classMsg="classMsg"-->
  </div>

</template>

<script>
  // 顶部
  import ParticularsHeader from "../components/particulars/particularsHeader"
  //介绍
  import ParticularsIntroduce from "../components/particulars/particularsIntroduce"
  //发病原因
  import ParticularsAetiological from "../components/particulars/particularsAetiological"
  //按钮查看详情
  import ParticularsBtn from "../components/particulars/particularsBtn"
  //分类
  import ParticularsClassification from "../components/particulars/particularsClassification"


  export default {
    name: "particulars",
    components: {
      ParticularsHeader,
      ParticularsIntroduce,
      ParticularsAetiological,
      ParticularsBtn,
      ParticularsClassification
    },
    data() {
      return {
        // 头部
        headerMag: {
          icon: require("../public/img/ic_titlebar_back.png"),
          iconn: require("../public/img/abc_ic_star_black_36dp.png"),
          iconnn: require("../public/img/ic_titlebar_share.png")
        },

        //介绍
        introMsg: {
          tit: "艾森门格综合征",
          informaTion: [
            {
              autho: "词条作者",
              img: require("../public/img/timg.jpg"),
              name: "张三",
              administrative: "儿科",
              post: "主治医生",
              icon: require("../public/img/ic_inquisition_arrow.png")
            },
            {
              autho: "审核专家",
              img: require("../public/img/timg (2).jpg"),
              name: "李四",
              administrative: "精神科",
              post: "主治医生",
              icon: require("../public/img/ic_inquisition_arrow.png")
            }
          ],
          release: "发布时间",
          retime: "2018年9月30日",
          lasteditTime: "最近编辑时间",
          lasTime: "2019年1月3日"
        },
        //发病原因
        particMsg: [
          "可见先心病、肺动脉高压及紫绀三大典型表现。", "先心病未及时治疗，成人后可发展为本病。", "对症治疗，尽量避免外科手术"
        ],
        //按钮
        btnMsg: {
          txt: "查看详情"
        }
      }
    }
  }
</script>

<style scoped>

</style>
