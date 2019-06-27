<template>
    <div class="callBottomBtn">
      <button>下一步</button>
    </div>
</template>

<script>
    export default {
        name: "callBottomBtn"
    }
</script>

<style scoped>
  .callBottomBtn{
    width: 100%;
    height: 98px;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 98px;
    font-size: 28px;
  }
  .callBottomBtn>button{
    width: 100%;
    height: 100%;
    background: #28b7a3;
    border: none;
    color: #fff;
    outline: none;
  }
</style>
