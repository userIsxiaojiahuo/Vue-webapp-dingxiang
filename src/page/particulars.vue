<template>
  <div>
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxHeaderIconWrap>
        <dxShareBtn/>
      </dxHeaderIconWrap>
    </dxHeaderReturn>
    <ParticularsIntroduce :introMsg="introMsg"/>
    <ParticularsAetiological :particMsg="particMsg"/>
    <ParticularsBtn :btnMsg="btnMsg"/>
    <homeItem :indexList="indexListNavv"/>
    <ParticularsRecommend/>
  </div>

</template>

<script>
  // 顶部
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  //介绍
  import ParticularsIntroduce from "../components/particulars/particularsIntroduce"
  //发病原因
  import ParticularsAetiological from "../components/particulars/particularsAetiological"
  //按钮查看详情
  import ParticularsBtn from "../components/particulars/particularsBtn"
  //分类
  import homeItem from "../components/index/homeItem"
  //推荐
  import ParticularsRecommend from "../components/particulars/particularsRecommend"

  import dxHeaderIconWrap from '../components/public/dxHeaderIconWrap'
  import dxShareBtn from '../components/public/dxShareBtn'


  export default {
    name: "particulars",
    components: {
      dxHeaderReturn,
      ParticularsIntroduce,
      ParticularsAetiological,
      ParticularsBtn,
      homeItem,
      ParticularsRecommend,
      dxHeaderIconWrap,
      dxShareBtn
    },
    data() {
      return {
        // 头部
        headerMag: {
          icon: require("../assets/img/illness/ic_titlebar_back.png"),
          iconn: require("../assets/img/illness/abc_ic_star_black_36dp.png"),
          iconnn: require("../assets/img/illness/ic_titlebar_share.png")
        },

        //介绍
        introMsg: {
          tit: "艾森门格综合征",
          informaTion: [
            {
              autho: "词条作者",
              img: require("../assets/img/illness/timg.jpg"),
              name: "张三",
              administrative: "儿科",
              post: "主治医生",
              icon: require("../assets/img/illness/ic_inquisition_arrow.png")
            },
            {
              autho: "审核专家",
              img: require("../assets/img/illness/timg (2).jpg"),
              name: "李四",
              administrative: "精神科",
              post: "主治医生",
              icon: require("../assets/img/illness/ic_inquisition_arrow.png")
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
        },
        //分类
        indexListNavv:[
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '症状',
            path: "callEmergency"
          },
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '病因',
            path: "callEmergency"
          },
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '诊断',
            path: "callEmergency"
          },
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '治疗',
            path: "callEmergency"
          },
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '生活',
            path: "callEmergency"
          },
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '预防',
            path: "callEmergency"
          },
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '就诊',
            path: "callEmergency"
          },
        ],
        headerReturnTitle: {}
      }
    }
  }
</script>

<style scoped>

</style>
