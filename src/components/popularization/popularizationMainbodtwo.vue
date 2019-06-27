<template>
    <div class="box">
        <p class="pOne">{{mainMsgT.pOne}}</p>
        <p class="pTwo">{{mainMsgT.pTwo}}</p>
        <ul>
            <li v-for=" liOne in mainMsgT.navs">{{liOne.liOne}}
                <ol>
                    <li v-for="(item,index) in liOne.liNavs">{{item}}</li>
                </ol>
            </li>
        </ul>
        <p class="attention">{{mainMsgT.attention}}</p>
    </div>
</template>

<script>
    export default {
        name: "PopularizationMainbodtwo",
        props:{
            mainMsgT:{
                type:Object
            }
        }
    }
</script>

<style scoped>
.box p,.box ul{
    font-size: 34px;
    margin:65px 30px 0;
    color: #666666;
    line-height: 60px;
    font-weight: 500;
}
.box ul{
    margin-left: 84px;
}
ol li{
    list-style: decimal!important;
}
ul>li{
    list-style: disc!important;
    font-weight: bolder;
}
ol>li{
    font-weight: 500;
}
.attention{
    font-weight: bolder!important;
}
</style>