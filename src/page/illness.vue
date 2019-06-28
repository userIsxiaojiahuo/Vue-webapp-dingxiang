<template>
    <div class="illness">
        <IllnessHeader :headerMsg="headerMsg"/>
        <IllnessSearch :searchMsg="searchMsg"/>
        <IllnessAlldisease :alldiseaseMsg="alldiseaseMsg"/>
        <IllnessClassify :classifyMsg="classifyMsg"/>
    </div>
</template>

<script>
    //顶部
    import IllnessHeader from '../components/illness/illnessHeader'
    //查询
    import IllnessSearch from '../components/illness/illnessSearch'
    //全部疾病
    import IllnessAlldisease from '../components/illness/illnessAlldisease'
    //分类
    import IllnessClassify from '../components/illness/illnessClassify'

    export default {
        name: "Illness",
        components: {
            IllnessHeader,
            IllnessSearch,
            IllnessAlldisease,
            IllnessClassify
        },
        data() {
            return {
                //顶部
                headerMsg: {
                    title: "查疾病",
                    icon: require("../public/img/ic_titlebar_back.png")
                },
                //查询
                searchMsg: {
                    placeholderMsg: "症状、疾病",
                    icon: require("../public/img/ic_search_after.png")
                },
                //全部疾病
                alldiseaseMsg: {
                    title: '全部疾病',
                    icon: require("../public/img/ic_screen_green.png"),
                    iconn: require("../public/img/crop__ic_cancel.png"),
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
                    indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],

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
                }
            }
        }
    }
</script>

<style src="../assets/css/illness.css"></style>
