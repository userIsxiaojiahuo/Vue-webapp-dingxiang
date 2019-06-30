<template>
  <div>
    <router-link :to="titMsg.path" tag="div" class="photoBox">
      <span>{{titMsg.name}}</span>
      <div class="right" @click="titMsg.event">
        <slot name="photoPic"></slot>
        <span class="tit">{{titMsg.tit}}</span>
        <dxRightArrows/>
      </div>
    </router-link>
  </div>
</template>
<script>
  import dxRightArrows from '../../components/public/dxRightArrows'

  export default {
    name: "SetContent",
    props: ["titMsg"],
    components: {
      dxRightArrows
    }
  }
</script>

<style scoped>
  .photoBox {
    width: 100%;
    height: 100px;
    border-bottom: #ebebeb 1px solid;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  }

  span {
    font-size: 30px;
    color: #333333;
  }

  .tit {
    color: #999999;
    margin-right: 20px;
  }

  i {
    display: inline-block;
    width: 27px;
    height: 27px;
    margin-left: 25px;
    margin-right: 47px;
  }

  .right {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .photoWrapper {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
