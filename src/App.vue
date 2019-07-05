<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"></router-view>
    <dxLoading class="loading" v-if="$store.state.isGetInfo"></dxLoading>
    <dxFooter v-if="this.$route.meta.footerIsShow"/>
  </div>
</template>

<script>
  import dxFooter from './components/public/dxFooter'
  import dxLoading from './components/public/dxLoading'


  export default {
    name: 'App',
    components: {dxFooter, dxLoading}
  }
</script>

<style scoped>
  .app {
    height: 100%;
  }

  .loading {
    width: 78px;
    height: 76px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99999;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
