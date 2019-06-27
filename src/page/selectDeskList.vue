<template>
  <!--  顶部-选择科室  -->

  <!--  科室列表-->
  <selectItem :selectItem="selectList"></selectItem>
</template>

<script>
  import selectItem from '../components/selectDeskList/selectItem'

  export default {
    name: "selectDeskList",
    components: {
      selectItem
    },
    data(){
      return{
        selectList:[
          {
            selectItemTitle:'儿科',
            selectItemdDesc:'小儿发烧、咳嗽、哮喘、流鼻涕、腹泻、黄疸、辅食、生长发育、疫苗接种、儿童用药、幼儿急疹'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
