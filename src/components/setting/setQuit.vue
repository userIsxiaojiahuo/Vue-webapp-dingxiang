<template>
  <div class="setQuit">退出登录</div>
</template>

<script>
  export default {
    name: "setQuit",
    props: {
      quieMsg: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .setQuit {
    width: 100%;
    height: 100px;
    font-size: 32px;
    color: #f76260;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 40px;
  }
</style>
