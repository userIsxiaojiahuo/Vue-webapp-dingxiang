<template>
    <div class="contentBox">
        <div class="contentLeft">
            <input type="text" v-model="inpVal" :placeholder="contentMsg.nickname">
            <i :style="{
        'background':'url('+ contentMsg.icon+')'+'no-repeat',
        'backgroundSize':'cover'
        }"
            ></i>
        </div>
        <p>{{contentMsg.txt}}</p>
    </div>
</template>

<script>
    export default {
        name: "amendContent",
        props:["contentMsg"],
        data(){
            return{
                inpVal:""
            }
        },
        watch:{
            inpVal(newVal){
                this.$emit('setName',this.inpVal)
            }
        }
    }
</script>

<style scoped>
    .contentLeft{
        width: 100%;
        height: 100px;
        background-color: white;
        padding: 0 30px;
        margin-top: 20px;
    }
    .contentLeft>input{
        width: 90%;
        font-size:30px;
        color: #333333;
        line-height: 96px;
    }
    i{
        display: inline-block;
        width:32px;
        height:32px;
        border-radius: 50%;
        float: right;
        margin-top:34px;
    }
    p{
        font-size: 24px;
        color: #999999;
        padding: 0 30px;
        margin-top: 35px;
    }
</style>
