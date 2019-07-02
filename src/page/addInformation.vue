<template>
    <div class="addInformation">
            <AskDoctorHeader :headerReturnTitle="headerMessage"></AskDoctorHeader>
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
                <input class="inp" type="text" placeholder="选择出生年月" @click="showPopup()" :value="date"/>
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
                <i :class="{isCheck:shows}" @click="handleShow"></i><span>有</span>
                <i :class="{isChecked:isFaless}" @click="hadnleFales"></i><span>无</span>
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
                <span
                        v-for="(item,index) in liver"
                        :key="index"
                        @click="handleLiver(index)"
                        :class="{spanLiver:index===clickLiver}"
                >{{item}}</span>
            </slot>
        </div>
        <div class="NAI liver">
            <slot name="Name">
                <span class="name">肾功能</span>
            </slot>
        </div>
        <div class="span">
            <slot name="span">
                <span
                        v-for="(item,index) in kidney"
                        :key="index"
                        @click="handleKidney(index)"
                        :class="{spanKidney:index===clickKidney}"
                >{{item}}</span>
            </slot>
        </div>
        <div class="NAI liver">
            <slot name="Name">
                <span class="name">备孕情况</span>
            </slot>
        </div>
        <div class="span lastSpan">
            <slot name="span">
                <span
                        v-for="(item,index) in pregency"
                        :key="index"
                        @click="handleSpan(index)"
                        :class="{spanBack:index===clickSpan}"
                >{{item}}</span>
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
    import homeSeparate from './../components/index/homeSeparate'
    import addInformationName from './../components/addInformation/addInformationName'
    import addInformationInp from './../components/addInformation/addInformationInp'
    import medicalHistory from './../components/addInformation/medicalHistory'
    import options from './../components/addInformation/option'
    import AskDoctorHeader from "../components/public/dxHeaderReturn"
    export default {
        name: "addInformation",
        components: {
            homeSeparate,
            addInformationName,
            addInformationInp,
            medicalHistory,
            options,
            AskDoctorHeader,
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
                minDate: new Date(1900, 1, 1),
                maxDate: new Date(),
                pregency: ["无", "备孕中", "怀孕中", "哺乳中"],
                kidney: ["正常", "异常"],
                liver: ["正常", "异常"],
                clickSpan: -1,
                clickKidney: -1,
                clickLiver: -1,
                shows: false,
                isFaless: false,
                headerMessage: {
                    title: "添加患者"
                }
            }
        },
        methods: {
            cancel() {
                this.isShow = false
            },
            handleSpan(index) {
                this.clickSpan = index;
            },
            handleKidney(index) {
                this.clickKidney = index;
            },
            handleLiver(index) {
                this.clickLiver = index;
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
                if (this.$refs.name.value.length === 0) {
                    // this.$refs.name.parentElement.style.borderBottom = '1px solid red';
                    alert("真实姓名不能为空")

                } else {
                    if (reg.test(this.$refs.name.value)) {

                    } else {
                        alert("请正确输入姓名")
                    }
                }
            },
            handleCard() {
                let reg = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/;
                let regs = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
                if (this.$refs.card.value.length === 0) {
                    // this.$refs.card.parentElement.style.borderBottom = '1px solid red';
                    alert("身份证号码不能为空");
                } else {
                    if ((reg.test(this.$refs.card.value) && this.$refs.card.value.length === 15) || (regs.test(this.$refs.card.value) && this.$refs.card.value.length === 18)) {
                        if (this.$refs.card.value.slice(16, 17) % 2 === 0) {
                            this.isFales = true;
                            this.show = false;
                        } else if (this.$refs.card.value.slice(16, 17) % 2 !== 0) {
                            this.show = true;
                            this.isFales = false;
                        }
                    } else {
                        alert("请输入有效身份证件号码");
                    }
                }
            },
            handleShow() {
                this.shows = true;
                this.isFaless = false;
            },
            hadnleFales() {
                this.isFaless = true;
                this.shows = false;
            }
        }
    }
</script>

<style src="./../assets/css/addInformation.css"></style>
