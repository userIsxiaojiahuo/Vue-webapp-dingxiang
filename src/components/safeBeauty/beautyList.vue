<template>
  <!--安全变美-->
  <div class="safeBeautyWrap">
    <div class="beautyItem" v-for="item in beautyList"><!--:style="{background:item.backgroundImg}"-->
      <div class="beautyItemTitle">{{item.title}}
        <span class="beautyItemDesc">{{item.desc}}</span>
      </div>
      <div class="beautyMore">更多
        <img src="../../assets/diagonseImg/ic_symptom_arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "beautyList",
    props:["beautyList"]
  }
</script>

