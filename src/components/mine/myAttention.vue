<template>
  <div class="myAttention">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <dxDefaultPage v-slot:DefaultPageLogo :DefaultPageTxt="DefaultPageTxt">
      <img class="imgAuto" src="../../assets/img/defaultPage/ic_doctor_empty.png" alt="">
    </dxDefaultPage>
  </div>
</template>

<script>
  import dxHeaderReturn from '../../components/public/dxHeaderReturn'
  import dxDefaultPage from '../../components/public/dxDefaultPage'

  /**
   * 我的关注
   */
  export default {
    name: "myAttention",
    data() {
      return {
        headerReturnTitle: {
          title: "我关注的医生"
        },
        DefaultPageTxt: {
          txt: "暂无关注的医生"
        }
      }
    },
    components: {
      dxHeaderReturn, dxDefaultPage
    }
  }
</script>

<style scoped>
  .myAttention {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
