<template>
    <div class="box">
        <p>{{mainMsgg.p}}</p>
        <ol>
            <li v-for="a in mainMsgg.navs" class="Olist">{{a.text}}
            <ul>
                <li v-for="(item,index) in a.nav">{{item}}</li>
            </ul>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "popularizationMainbodthree",
        props:{
            mainMsgg:Object
        }
    }
</script>

<style scoped>
    .box p,.box ol{
        font-size: 34px;
        color: #666666;
        line-height: 60px;
        font-weight: 500;
    }
    .box p{
        margin:65px 30px 0;
    }
    .box ol{
        margin-left: 84px;
    }
    ol>li{
        list-style: decimal!important;
        font-weight: bolder;
    }
    .Olist{
        line-height: 120px;
    }
    ul>li{
        margin-top: 30px;
        line-height: 60px!important;
        font-weight: 400!important;
        margin-left: -30px!important;
        margin-right: 30px!important;
    }
</style>