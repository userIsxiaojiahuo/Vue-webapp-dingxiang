<template>
  <div class="mineListWrapper">
    <slot name="fund"></slot>
  </div>
</template>

<script>
  export default {
    name: "mineListWrapper"
  }
</script>

<style scoped>
  .mineListWrapper {
    display: flex;
    margin-top: 20px;
    align-items: center;
    background: #ffffff;
    min-height: 115px;
    padding: 0 32px;
  }
</style>
