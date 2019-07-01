<template>
<<<<<<< HEAD
    <div class="setTotal">
        <AmendHeader :amendHead="amendHead"/>
        <AmendContent :contentMsg="contentMsg"/>
    </div>
</template>

<script>
    import AmendHeader from "../components/setting/setAmendname/amendHeader"
    import AmendContent from "../components/setting/setAmendname/amendContent"

    export default {
        name: "setAmendname",
        components: {
            AmendHeader,
            AmendContent
        },
        data(){
            return{
                //头部·
                amendHead:{
                  tit:"修改昵称",
                  txt:"保存",
                },
                //修改昵称
                contentMsg:{
                    nickname:"fghjkl",
                    icon:require("../public/img/ic_clear_white_24dp.png"),
                    txt:"2-16个字符，仅支持中文、英文大小写和数字组合，不支持纯数字"
                }
            }
        }
    }
</script>

<style scoped>
.setTotal{
    background-color: #ebebeb;
    height: 100%;
}
</style>
=======
  <div class="setTotal">
    <AmendHeader :amendHead="amendHead"/>
    <AmendContent :contentMsg="contentMsg"/>
  </div>
</template>

<script>
  import AmendHeader from "../components/setting/setAmendname/amendHeader"
  import AmendContent from "../components/setting/setAmendname/amendContent"

  export default {
    name: "setAmendname",
    components: {
      AmendHeader,
      AmendContent
    },
    data() {
      return {
        //头部·
        amendHead: {
          tit: "修改昵称",
          txt: "保存",
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
>>>>>>> 66d4c18087e655b15d12b1f4675564da501baece
