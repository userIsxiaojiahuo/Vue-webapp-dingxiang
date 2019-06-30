<template>
  <div class="selectDeskList">
    <!--  顶部-选择科室  -->

    <!--  科室列表-->
    <selectItem :selectItem="selectList"></selectItem>
  </div>
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
            selectItemTitle:'皮肤性病科',
            selectItemdDesc:'痣、痘痘、痤疮、湿疹、狐臭、瘙痒、脚气、脱发、灰指甲、梅毒、淋病、皮肤过敏、毛孔粗大、毛囊炎'
          },
          {
            selectItemTitle:'儿科',
            selectItemdDesc:'小儿发烧、咳嗽、哮喘、流鼻涕、腹泻、黄疸、辅食、生长发育、疫苗接种、儿童用药、幼儿急疹'
          },
          {
            selectItemTitle:'妇产科',
            selectItemdDesc:'怀孕、不孕、产检、孕期用药、月经不调、阴道流血、更年期、宫颈问题、妇科肿瘤、盆腔炎、宫外孕'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.selectDeskList{
  width: 100%;
  background: #f4f4f4;
  margin-bottom: 120px;
  overflow-y: hidden;
}
</style>
