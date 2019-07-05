<template>
  <div class="illness">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
    <IllnessSearch :searchMsg="searchMsg"/>
    <IllnessAlldisease :alldiseaseMsg="alldiseaseMsg"/>
    <IllnessClassify :classifyMsg="classifyMsg"/>
  </div>
</template>

<script>
  //顶部
  import dxHeaderReturn from '../components/public/dxHeaderReturn'
  //查询
  import IllnessSearch from '../components/illness/illnessSearch'
  //全部疾病
  import IllnessAlldisease from '../components/illness/illnessAlldisease'
  //分类
  import IllnessClassify from '../components/illness/illnessClassify'

  /**
   * 查疾病列表页面
   */
  export default {
    name: "Illness",
    components: {
      dxHeaderReturn,
      IllnessSearch,
      IllnessAlldisease,
      IllnessClassify
    },
    data() {
      return {
        //顶部
        headerMsg: {
          title: "查疾病",
          icon: require("../assets/img/illness/ic_titlebar_back.png")
        },
        //查询
        searchMsg: {
          placeholderMsg: "症状、疾病",
          icon: require("../assets/img/illness/ic_search_after.png")
        },
        //全部疾病
        alldiseaseMsg: {
          title: '全部疾病',
          icon: require("../assets/img/illness/ic_screen_green.png"),
          iconn: require("../assets/img/illness/crop__ic_cancel.png"),
          select: '筛选',
          tit: "疾病筛选",
          all: "全部疾病",
          desk: "按科室",
          own: [
            "儿科", "泌尿外科", "皮肤性病科", "骨科", "内分泌科", "心血管内科", "神经内科"
          ]

        },
        //分类
        classifyMsg: {
          indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P","Q","R","S","T","U","V","W","X","Y","Z"],

          classifyMsgTitle: [
            {
              title: "A",
              text: [
                "艾森门格综合征", "艾滋病", "嗳气", "癌性疼痛"
              ]
            },
            {
              title: "B",
              text: [
                "便秘", "便血", "扁桃体结石", "扁平足", "表皮囊肿"
              ]
            },
            {
              title: "C",
              text: [
                "垂体瘤", "肠结核", "垂体功能减退症"
              ]
            },
            {
              title: "D",
              text: [
                "淀粉样变", "癫痫", "多毛症"
              ]
            },
            {
              title: "E",
              text: [
                "腭裂", "恶性贫血", "恶心与呕吐"
              ]
            },
            {
              title: "F",
              text: [
                "房颤", "肺炎", "肺栓赛"
              ]
            },
          ]
        },
        headerReturnTitle: {
          title: "查疾病"
        }
      }
    },
    created() {
      // this.$store.dispatch("GetInfo", true);
      this.$axios.get("http://121.199.63.71:9006/medc_illness/").then((data)=>{
        // console.log(data)
        if(data.data.code === 200){
          // this.$store.dispatch("GetInfo", false);
          // this.classifyMsg.classifyMsgTitle = data.data.data;
        }
      })
    }
  }
</script>

<style src="../assets/css/illness.css"></style>
