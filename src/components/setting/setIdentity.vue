<template>
    <div>
        <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
            <dxNextBtn @click.native="setNameOK" :headerReturnTitle="headerReturnTitle"></dxNextBtn>
        </dxHeaderReturn>
    </div>
</template>

<script>

    import dxHeaderReturn from "../../components/public/dxHeaderReturn"
    import dxNextBtn from '../../components/public/dxNextBtn'
    export default {
        name: "setIdentity",
        components:{
            dxHeaderReturn,dxNextBtn
        },
        data(){
            return{
                //头部·
                amendHead:{
                    tit:"我的身份",
                    txt:"保存",
                },
                headerReturnTitle: {
                    title: "修改昵称",
                    txt:"完成",
                    path:'/Setting'
                },
            }
        }
    }
</script>

<style scoped>

</style>
