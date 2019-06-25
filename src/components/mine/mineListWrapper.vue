<template>
  <div class="mineListWrapper">
    <span class="listInfo">{{titleText}}</span>
    <dxRightArrows/>
  </div>
</template>

<script>
  /**
   * 我的页面-下面list页面
   */
  import dxRightArrows from '../public/dxRightArrows'

  export default {
    name: "mineListWrapper",
    props: ["titleText"],
    components: {
      dxRightArrows
    }
  }
</script>
