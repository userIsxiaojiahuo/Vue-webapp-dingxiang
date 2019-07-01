<template>
  <div class="addInformation">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxNextBtn :headerReturnTitle="headerReturnTitle"/>
    </dxHeaderReturn>
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
  import dxHeaderReturn from './../components/public/dxHeaderReturn'
  import dxNextBtn from './../components/public/dxNextBtn'
  import homeSeparate from './../components/index/homeSeparate'
  import addInformationName from './../components/addInformation/addInformationName'
  import addInformationInp from './../components/addInformation/addInformationInp'
  import medicalHistory from './../components/addInformation/medicalHistory'
  import options from './../components/addInformation/option'

  export default {
    name: "addInformation",
    components: {
      dxHeaderReturn,
      homeSeparate,
      addInformationName,
      addInformationInp,
      medicalHistory,
      options,
      dxNextBtn
    },
    data() {
      return {
        isFales: false,
        show: false,
        headerReturnTitle: {
          title: "添加患者",
          txt: "完成",
          path: "/patientInformation"
        }
      }
    },
    methods: {
      handleName() {
        let reg = /^[\u4e00-\u9fa5]/;
        if (!reg.test(this.$refs.name.value) && this.$refs.name.value.length !== 0) {
          this.$refs.name.parentElement.style.borderBottom = '1px solid red';
          alert("请正确输入姓名")
        }
      },
      handleCard() {
        let reg = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/;
        let regs = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        if ((!reg.test(this.$refs.card.value) && this.$refs.card.value.length === 15) || (!regs.test(this.$refs.card.value) && this.$refs.card.value.length === 18)) {
          this.$refs.card.parentElement.style.borderBottom = '1px solid red';
          alert("请有效身份证件号码")
        }
        if (this.$refs.card.value.slice(16, 17) % 2 === 0) {
          this.isFales = true;
        } else {
          this.show = true;
        }
      }
    }
  }
</script>

<style src="./../assets/css/addInformation.css"></style>
