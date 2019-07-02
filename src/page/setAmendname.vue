<template>
  <div class="setTotal">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxNextBtn :headerReturnTitle="headerReturnTitle"></dxNextBtn>
    </dxHeaderReturn>
    <AmendContent :contentMsg="contentMsg"/>
  </div>
</template>

<script>
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxNextBtn from "../components/public/dxNextBtn"
  import AmendContent from "../components/setting/setAmendname/amendContent"

  export default {
    name: "setAmendname",
    components: {
      dxHeaderReturn,
      AmendContent,
      dxNextBtn
    },
    data() {
      return {
        //头部·
        headerReturnTitle: {
          title: "修改昵称",
          txt: "保存",
          path: "setting",
        },
        //修改昵称
        contentMsg: {
          nickname: "fghjkl",
          icon: require("../assets/img/public/ic_clear_white_24dp.png"),
          txt: "2-16个字符，仅支持中文、英文大小写和数字组合，不支持纯数字"
        }
      }
    }
  }
</script>

<style scoped>
  .setTotal {
    background-color: #ebebeb;
    height: 100%;
  }
</style>
