<template>
    <div class="box">
        <img @click="handleClickImg(item.id)" :src="item.image" v-for="(item,index) in classiFicationMessageImg" :key="index" >
    </div>
</template>

<script>
    export default {
        name: "classificationOther",
        props:{
            classiFicationMessageImg:{
                type:Array
            }
        },
        methods:{
            handleClickImg(id){
                this.$router.push({
                    path:"/Popularization",
                    query:{
                        id:id
                    }
                })
            }
        }
    }
</script>

<style scoped>
.box{
   margin-left: 50px;
    margin-top: 23px;
    }
img{
    display: inline-block;
    width: 210px;
    height: 210px;
    margin-right: 13px;
    margin-top: 44px;
}
</style>
