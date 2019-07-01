<template>
    <div class="modeListCon">
        <div class="modeLists"
             :style="{
                'backgroundImage':'url(' + item.icon + ')',
                'backgroundRepeat':'no-repeat',
                'backgroundSize':'32px 32px',
                'backgroundPosition':'0 10px'
        }"
             v-for="(item,index) in modeText"
             :key="index"
        >
            <div class="modeListTitleTop">
                {{item.title}}
            </div>
            <div class="smallText">
                {{item.smallText}}
            </div>
            <i class="modelistToImg"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modeList",
        props: {
            modeText: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .modeLists {
        position: relative;
        padding-left: 80px;
        border-bottom: 1px solid #ebebeb; /*no*/
        padding-right: 90px;
    }

    .modeListTitleTop {
        font-size: 30px;
        color: black;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 60px;
    }

    .smallText {
        font-size: 20px;
        color: #bababa;
        line-height: 60px;
    }

    .modelistToImg {
        display: inline-block;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50px;
        right: 30px;
        background: url("../../../assets/images/askdoctor/hospitalInfo/ic_arrow.png");
        background-size: 100% 100%;
    }
</style>