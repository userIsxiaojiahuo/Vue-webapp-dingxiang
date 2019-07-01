<template>
    <div>
        <AmendHeader :amendHead="amendHead"/>
    </div>
</template>

<script>
    import AmendHeader from "../../components/setting/setAmendname/amendHeader"


    export default {
        name: "setIdentity",
        components:{
            AmendHeader,
        },
        data(){
            return{
                //头部·
                amendHead:{
                    tit:"我的身份",
                    txt:"保存",
                },
            }
        }
    }
</script>

<style scoped>

</style>