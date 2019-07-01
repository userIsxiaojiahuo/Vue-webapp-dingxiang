<template>
  <div class="dxDefaultPage">
    <div class="logoWrapper">
      <slot name="DefaultPageLogo"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dxDefaultPage"
  }
</script>

<style scoped>
  .dxDefaultPage {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .logoWrapper {
    width: 227px;
    height: 233px;
    transform: translateY(-50%);
  }
</style>
