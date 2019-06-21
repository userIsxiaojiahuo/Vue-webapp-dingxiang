<template>
  <div class="dx_tab">

  </div>
</template>

<script>
export default {
  name: 'DxFooerTab',
  data() {
    return {
      footerText: [
        {
          title: '首页',
          img: '',
          path: '/index'
        },
        {
          title: '问诊',
          img: '',
          path: ''
        },
        {
          title: '我的',
          img: '',
          path: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.dx_tab {
  width: 100%;
  height: 100px;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>