<template>
  <div class="header">
    <div class="box">
      <a href="javascript:;" class="headerLeft">
        <i :style="{
           'background':'url('+ headerMsg.icon +')'+'no-repeat',
           'backgroundSize':'cover'
        }"
        ></i>
      </a>
      <p>{{headerMsg.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IllnessHeader',
  props:{
    headerMsg:{
      type:Object
    }
  }
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 162px;
    background-color: #fcfcfc;
  }
  .box{
    width: 100%;
    height: 50px;
    padding-top: 81px;
    display: flex;
  }
  .box>a{
    display: inline-block;
    width: 46px;
    height: 40px;
    margin-left: 30px;
  }
  .box>a>i{
    display: inline-block;
    height: 40px;
    width: 40px;
    margin-top: 3px;
  }
  .box>p{
    display: inline-block;
    font-size:34px;
    font-weight: bolder;
    line-height: 50px;
  }
</style>