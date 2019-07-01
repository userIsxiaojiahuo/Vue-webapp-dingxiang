<template>
    <div class="copyParcel">
        <span>{{copyMsg.tit}}</span>
        <van-switch v-model="checked" active-color="#27b3a0"  size="20px"/>
    </div>

</template>

<script>
    import { Switch } from 'vant';
    export default {
        name: "setCopy",
        components:{
            "van-switch": Switch,
        },
        data() {
            return {
                checked: true
            };
        },
        props:{
            copyMsg:{
                type:Object
            }
        }
    }
</script>

<style>
    .copyParcel{
        width: 100%;
        height: 100px;
        border-bottom: #ebebeb 1px solid;
        padding-left: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 40px 0;
        background-color: white;
    }
    span{
    font-size:30px;
    color:#333333;
    }
    .van-switch{
        margin-right: 35px;
    }
</style>