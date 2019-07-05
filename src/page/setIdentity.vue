<template>
    <div>
        <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
            <dxNextBtn :headerReturnTitle="headerReturnTitle"/>
        </dxHeaderReturn>
        <IdentityContent :indentMsg="indentMsg"/>
    </div>
</template>

<script>
    import dxHeaderReturn from '../components/public/dxHeaderReturn'
    import IdentityContent from "../components/setting/setIdentity/identityContent"
    import dxNextBtn from '../components/public/dxNextBtn'

    export default {
        name: "setIdentity",
        components:{
            dxHeaderReturn,
            IdentityContent,
            dxNextBtn
        },
        data(){
            return{
                //头部·
                headerReturnTitle: {
                    title: "我的身份",
                    txt:"完成",
                    path:'/Setting'
                },
                //有无宝宝
                indentMsg:[
                    {"a":"我有宝宝"},
                    {"a":"没有宝宝"},
            ]
            }
        }
    }
</script>

<style scoped>

</style>
