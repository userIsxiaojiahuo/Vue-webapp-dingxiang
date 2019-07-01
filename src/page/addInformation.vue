<template>
    <div class="addInformation">
        <addInformationHeader></addInformationHeader>
        <homeSeparate></homeSeparate>
        <div class="NAI">
            <slot name="Name">
                <span class="name">患者姓名</span>
            </slot>
            <slot name="Inp">
                <input class="inp" type="text" placeholder="请填写真实姓名"/>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">患者身份证号</span>
            </slot>
            <slot name="Inp">
                <input class="inp" type="text" placeholder="请填写身份证号"/>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">性别</span>
            </slot>
            <slot name="Inp">
                <i class="check"></i><span>男</span>
                <i class="checked"></i><span>女</span>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">出生年月</span>
            </slot>
            <slot name="Inp">
                <input class="inp" type="date" placeholder="选择出生年月"/>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">体重</span>
            </slot>
            <slot name="Inp">
                <input class="inp" type="text" placeholder="Kg"/>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">过敏史</span>
            </slot>
            <slot name="Inp">
                <i class="check"></i><span>有</span>
                <i class="checked"></i><span>无</span>
            </slot>
        </div>
        <homeSeparate></homeSeparate>
        <div class="NAI">
            <slot name="Name">
                <span class="name">过往病史</span>
            </slot>
        </div>
    </div>
</template>

<script>
    import addInformationHeader from './../components/addInformation/addInformationHeader'
    import homeSeparate from './../components/index/homeSeparate'
    import addInformationName from './../components/addInformation/addInformationName'
    import addInformationInp from './../components/addInformation/addInformationInp'


    export default {
        name: "addInformation",
        components: {
            addInformationHeader,
            homeSeparate,
            addInformationName,
            addInformationInp
        }
    }
</script>

<style src="./../assets/css/addInformation.css"></style>
