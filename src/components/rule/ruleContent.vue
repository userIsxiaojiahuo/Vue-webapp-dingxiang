<template>
    <div class="ruleContent">
      <div class="ruleTitle">
        <span>活动规则</span>
      </div>
      <div class="ruleP">
        <p>1：[名医义诊]为丁香医生平台推出的限时福利，参与医生均为自愿报名。</p>
        <p>2：每位医生的[名医义诊]名额有限。如被抢光，将自动退出本次活动。</p>
        <p>3：由于资源紧张，为了保障名医义诊]机会能给到更需要的用户，每人每周最多可问5次。</p>
        <p>4：丁香医生保留最终的活动解释权。</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ruleContent"
    }
</script>

<style scoped>

  .ruleTitle{
    width: 100%;
    height: 120px;
    color: #616161;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ruleTitle>span,.ruleP{
    margin: 0 34px;
  }
  .ruleTitle::before{
    content: '';
    width: 240px;
    height: 2px;/*no*/
    background: #dcdcdc;
  }
  .ruleTitle::after{
    content: '';
    width: 240px;
    height: 4px;
    background: #dcdcdc;
  }
  .ruleP p{
    font-size: 26px;
    color: #999999;
    line-height: 50px;
    margin-bottom: 10px;
  }
</style>
