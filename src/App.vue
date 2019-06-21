<template>
  <div id="app">
    <router-view></router-view>
    <DxFooterTab />
  </div>
</template>

<script>
import DxFooterTab from './components/dx-footer-tab'
export default {
  name: 'App',
  components: {
    DxFooterTab
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
