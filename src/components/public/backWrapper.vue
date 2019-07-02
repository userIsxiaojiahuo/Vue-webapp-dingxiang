<template>
  <div class="backIcon" @click="Back">
    <dxBack/>
    <span class="headerReturn-text" v-html="headerReturnTitle.title"></span>
  </div>
</template>

<script>
  import common from '../../assets/js/common.js'
  import dxBack from '../public/dxBack'

  export default {
    name: "backWrapper",
    components: {
      dxBack
    },
    methods: {
      Back() {
        common.goBack(this)
      }
    },
    props: ['headerReturnTitle']
  }
</script>

<style scoped>
  .headerReturn-text {
    font-size: 32px;
    color: #030303;
    font-weight: 600;
    line-height: 1.2;
  }

  .backIcon {
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
