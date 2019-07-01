<template>
  <router-link :to="headerReturnTitle.path" tag="button" class="next">{{headerReturnTitle.txt}}</router-link>
</template>

<script>
  export default {
    name: "dxNextBtn",
    props: ['headerReturnTitle']
  }
</script>

<style scoped>
  .next {
    font-size: 24px;
    color: white;
    background-color: #28b7a3;
    width: 118px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 6px;
    border: 0;
  }
</style>
