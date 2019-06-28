<template>
   <Searchpage :cancleMsg="cancleMsg"/>
</template>

<script>
    import Searchpage from '../components/illnessTwo/searchpage'

    export default {
    name: "IllnessTwo",
    components:{
        Searchpage
    },
    data(){
        return{
           cancleMsg:{
                icon:require("../public/img/ic_search_after.png"),
                placeholderMsg:"症状，疾病",
                cancleBtn:"取消"
            }
        }
    }
    }
</script>

<style scoped>

</style>