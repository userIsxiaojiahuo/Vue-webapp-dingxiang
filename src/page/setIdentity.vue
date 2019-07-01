<template>
    <div>
        <AmendHeader :amendHead="amendHead"/>
        <IdentityContent :indentMsg="indentMsg"/>
    </div>
</template>

<script>
    import AmendHeader from "../components/setting/setAmendname/amendHeader"
    import IdentityContent from "../components/setting/setIdentity/identityContent"


    export default {
        name: "setIdentity",
        components:{
            AmendHeader,
            IdentityContent
        },
        data(){
            return{
                //头部·
                amendHead:{
                    tit:"我的身份",
                    txt:"保存",
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