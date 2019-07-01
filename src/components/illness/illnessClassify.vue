<template>
    <div>
    <div>
        <van-index-bar :index-list="classifyMsg.indexList"
        >

            <van-index-anchor v-for="(itme,index) in classifyMsg.classifyMsgTitle" :key="index">{{itme.title}}

                <van-cell v-for="(items,lis) in itme.text" :title="items" :key="lis"/>
            </van-index-anchor>

        </van-index-bar>
    </div>
  <div>
    <router-link to="/particulars" :index-list="classifyMsg.indexList">
      <van-index-anchor v-for="(item,index) in classifyMsg.classifyMsgTitle" :key="index">{{item.title}}
        <van-cell v-for="(items,index) in item.text" :title="items" :key="index"/>
      </van-index-anchor>
    </router-link>
    <van-index-bar :index-list="classifyMsg.indexList"
    >
      <van-index-anchor v-for="(itme,index) in classifyMsg.classifyMsgTitle" :key="index">{{itme.title}}
        <van-cell v-for="(items,lis) in itme.text" :title="items" :key="lis"/>
      </van-index-anchor>
    </van-index-bar>
  </div>
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
    methods: {}
  }
</script>

<style scoped>

</style>
