<template>
    <div>
        <!--右边的A-Z-->
            <van-index-bar
                    :index-list="classifyMsg.indexList"
            >
                <!--分开的A-Z-->
              <van-index-anchor
                      v-for="(item,index) in classifyMsg.classifyMsgTitle"
                      :key="index">{{item.title}}
                  <!--根据首字母不同的相应疾病-->
                <van-cell
                        v-for="(items,index) in item.text"
                        :title="items"
                        :key="index"
                        @click="intoillness"
                />
              </van-index-anchor>
            </van-index-bar>
    </div>
</template>

<script>
  import {IndexBar} from 'vant';
  import {IndexAnchor} from 'vant';
  import {Cell} from 'vant';

  export default {
    name: "illnessClassify",
    components: {
      "van-index-bar": IndexBar,
      "van-index-anchor": IndexAnchor,
      "van-cell": Cell,
    },
    props: ["classifyMsg"],
      methods:{
          intoillness(){
             this.$router.push("/popularization")
          }
      }
  }
</script>

<style >
.van-index-bar__sidebar{
    z-index:999!important;
    position: fixed;
    top:60%;
}
</style>
