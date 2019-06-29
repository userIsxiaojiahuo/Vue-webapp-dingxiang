<template>
  <div class="dxHeaderIconWrap">
    <slot></slot>
    <dxAttentionBtn/>
  </div>
</template>

<script>


  import dxAttentionBtn from "../../components/public/dxAttentionBtn"

  export default {
    name: "dxHeaderIconWrap",
    components: {
      dxAttentionBtn
    }
  }
</script>

<style scoped>
  .dxHeaderIconWrap {
    display: flex;
  }
</style>
