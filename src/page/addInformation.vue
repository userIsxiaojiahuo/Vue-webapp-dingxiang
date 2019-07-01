<template>
    <div class="addInformation">
        <addInformationHeader></addInformationHeader>
        <homeSeparate></homeSeparate>
        <div class="NAI">
            <slot name="Name">
                <span class="name">患者姓名</span>
            </slot>
            <slot name="Inp">
                <input class="inp" ref="name" @blur="handleName" type="text" placeholder="请填写真实姓名"/>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">患者身份证号</span>
            </slot>
            <slot name="Inp">
                <input class="inp" @blur="handleCard" ref="card" type="text" placeholder="请填写身份证号"/>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">性别</span>
            </slot>
            <slot name="Inp">
                <i class="check" :class="{isCheck:show}"></i><span>男</span>
                <i class="checked" :class="{isChecked:isFales}"></i><span>女</span>
            </slot>
        </div>
        <div class="NAI">
            <slot name="Name">
                <span class="name">出生年月</span>
            </slot>
            <slot name="Inp">
                <input class="inp" type="text" placeholder="选择出生年月" @click="showPopup" :value="date"/>
                <van-popup v-model="isShow"
                           position="bottom"
                           :style="{ height: '38.2%' }">

                    <van-datetime-picker
                            @cancel="cancel"
                            @confirm="confirm"
                            v-model="currentDate"
                            type="date"
                            :min-date="minDate"
                            :max-date="maxDate"
                    />
                </van-popup>
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
        <div class="NAI allergy">
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
        <medicalHistory></medicalHistory>
        <homeSeparate></homeSeparate>
        <div class="NAI liver">
            <slot name="Name">
                <span class="name">肝功能</span>
            </slot>
        </div>
        <div class="span">
            <slot name="span">
                <span>正常</span>
                <span>异常</span>
            </slot>
        </div>
        <div class="NAI liver">
            <slot name="Name">
                <span class="name">肾功能</span>
            </slot>
        </div>
        <div class="span">
            <slot name="span">
                <span>正常</span>
                <span>异常</span>
            </slot>
        </div>
        <div class="NAI liver">
            <slot name="Name">
                <span class="name">备孕情况</span>
            </slot>
        </div>
        <div class="span lastSpan">
            <slot name="span">
                <span>无</span>
                <span>备孕中</span>
                <span>怀孕中</span>
                <span>哺乳中</span>
            </slot>
        </div>
        <homeSeparate></homeSeparate>
        <homeSeparate></homeSeparate>
        <homeSeparate></homeSeparate>
        <homeSeparate></homeSeparate>
        <homeSeparate></homeSeparate>
    </div>
</template>

<script>
    import {DatetimePicker} from 'vant';
    import {Popup} from 'vant';
    import addInformationHeader from './../components/addInformation/addInformationHeader'
    import homeSeparate from './../components/index/homeSeparate'
    import addInformationName from './../components/addInformation/addInformationName'
    import addInformationInp from './../components/addInformation/addInformationInp'
    import medicalHistory from './../components/addInformation/medicalHistory'
    import options from './../components/addInformation/option'

    export default {
        name: "addInformation",
        components: {
            addInformationHeader,
            homeSeparate,
            addInformationName,
            addInformationInp,
            medicalHistory,
            options,
            "van-popup": Popup,
            "van-datetime-picker": DatetimePicker
        },
        data() {
            return {
                currentDate: new Date(),
                isFales: false,
                show: false,
                isShow: false,
                date: "",
                minDate: new Date(1900,1,1),
                maxDate: new Date()

            }
        },
        methods: {
            cancel() {
                this.isShow = false
            },
            confirm(val) {
                // this.date = val
                let year = val.getFullYear();
                let month = val.getMonth();
                let day = val.getDate();
                let dateStr = year + '年' + (month + 1) + '月' + day + '日';
                this.date = dateStr;
                this.cancel();
            },
            showPopup() {
                this.isShow = true;
            },
            handleName() {
                let reg = /^[\u4e00-\u9fa5]/;
                if (reg.test(this.$refs.name.value)) {

                } else {
                    this.$refs.name.parentElement.style.borderBottom = '1px solid red';
                    alert("请正确输入姓名")
                }
            },
            handleCard() {
                let reg = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/;
                let regs = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
                if ((reg.test(this.$refs.card.value) && this.$refs.card.value.length === 15) || (regs.test(this.$refs.card.value) && this.$refs.card.value.length === 18)) {
                    if (this.$refs.card.value.slice(16, 17) % 2 === 0) {
                        this.isFales = true;
                    } else if (this.$refs.card.value.slice(16, 17) % 2 !== 0) {
                        this.show = true;
                    }
                } else {

                    this.$refs.card.parentElement.style.borderBottom = '1px solid red';
                    alert("请有效身份证件号码");
                }

            }
        }
    }
</script>

<style src="./../assets/css/addInformation.css"></style>
