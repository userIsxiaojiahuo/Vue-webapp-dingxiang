<template>
  <!--安全变美-->
  <div class="safeBeautyWrap">
    <div class="beautyItem" v-for="item in beautyList">
      <img class="imgAuto" :src="item.backgroundImg" alt="">
      <div class="beautyItemTitle">{{item.title}}
        <span class="beautyItemDesc">{{item.desc}}</span>
      </div>
      <div class="beautyMore">更多
        <img src="../../assets/img/diagonseImg/ic_symptom_arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "beautyList",
    props: ["beautyList"]
  }
</script>
<style scoped>
  .imgAuto {
    position: absolute;
    top: 0;
  }

  .beautyItemTitle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
</style>


