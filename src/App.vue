<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"></router-view>
    <loginPopup :popupIsShow="$store.state.loginPopups"/>
    <dxLoading class="loading" v-if="$store.state.isGetInfo"></dxLoading>
    <dxFooter v-if="this.$route.meta.footerIsShow"/>
  </div>
</template>

<script>
  import dxFooter from './components/public/dxFooter'
  import dxLoading from './components/public/dxLoading'
  import loginPopup from './components/public/loginPopup'


  export default {
    name: 'App',
		provide(){
			return{
				reload:this.reload
			}
		},
    components: {dxFooter, dxLoading, loginPopup}
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
