<template>
    <div class="app">
        <router-view></router-view>
        <dxFooter v-if="this.$route.meta.footerIsShow"/>
    </div>
</template>

<script>
    import dxFooter from './components/public/dxFooter'

    export default {
        name: 'App',
        components: {dxFooter}
    }
</script>

<style scoped>
    .app {
        height: 100%;
    }
</style>
