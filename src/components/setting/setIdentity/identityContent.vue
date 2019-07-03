<template>
    <div class="indentContene">
        <span
                v-for="(list,index) in indentMsg"
                :key="index"
                :class="{green:changeGreen === index}"
                @click="change(index)">{{list.a}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "identityContent",
        props:["indentMsg"],
        data(){
            return{
                changeGreen:0
            }

        },
        methods:{
            change(index){
                this.changeGreen=index;
                console.log(index)
            }
        }
    }
</script>

<style scoped>
.indentContene{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
    .indentContene span{
        width:168px;
        height:81px;
        color: #666666;
        background-color:#f4f4f4;
        border-radius:28px;
        line-height:81px;
        text-align: center;
        display: inline-block;
        margin-top:80px;
        margin-left:38px;
    }
.indentContene .green{
        color: white;
        background-color: #28b7a3;
        border-radius:28px;
        line-height:81px;
        text-align: center;
        display: inline-block;
        margin-top:80px;
        margin-left:38px;
        width:168px;
        height:81px;
    }
</style>