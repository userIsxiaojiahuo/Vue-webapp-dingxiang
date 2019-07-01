<template>
  <div class="headerReturn">
    <div class="headerReturn-box">
      <backWrapper :headerReturnTitle="headerReturnTitle"/>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import backWrapper from '../public/backWrapper'

  export default {
    /*头部返回*/
    name: "headerReturn",
    props: ["headerReturnTitle"],
    components: {
      backWrapper
    }
  }
</script>

<style scoped>
  .headerReturn {
    width: 100%;
    height: 120px;
    background: #fcfcfc;
    border-bottom: 1px solid #ebebeb;
    padding: 0 30px;

  }

  .headerReturn-box {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }


</style>
