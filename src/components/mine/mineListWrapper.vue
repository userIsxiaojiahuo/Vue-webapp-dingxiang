<template>
  <div>
    <div class="mineListWrapper" @click="handleToUserMessage(path)">
      <span class="listInfo">{{titleText}}</span>
      <dxRightArrows/>
    </div>
  </div>
</template>

<script>
  /**
   * 我的页面-下面list页面
   */
  import dxRightArrows from '../public/dxRightArrows'

  export default {
    name: "mineListWrapper",
    props: ["titleText", "path"],
    components: {
      dxRightArrows
    },
    methods: {
      handleToUserMessage(link) {
        this.$router.push({
          path: link
        })
      }
    }
  }
</script>
