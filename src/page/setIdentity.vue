<template>
    <div>
        <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
            <AmendHeader/>
        </dxHeaderReturn>
        <IdentityContent :indentMsg="indentMsg"/>
    </div>
</template>

<script>
    import dxHeaderReturn from '../components/public/dxHeaderReturn'
    import IdentityContent from "../components/setting/setIdentity/identityContent"
    import AmendHeader from  "../components/setting/setAmendname/amendHeader"


    export default {
        name: "setIdentity",
        components:{
            dxHeaderReturn,
            IdentityContent,
            AmendHeader
        },
        data(){
            return{
                //头部·
                headerReturnTitle: {
                    title: "我的身份"
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