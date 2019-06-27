<template>
    <div class="box">
        <img :src="item" v-for="(item,index) in otherMsg.img" >
    </div>
</template>

<script>
    export default {
        name: "classificationOther",
        props:{
            otherMsg:{
                type:Object
            }
        },
        created() {
            console.log(this.otherMsg)
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