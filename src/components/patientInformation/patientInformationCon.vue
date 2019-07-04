<template>
  <div class="patientInformationCon">
    <span class="spa">最多可添加6人</span>
    <div>
      <span class="name">{{name}}</span>
      <p>
        <span class="sex" v-for="item in nameInfo">{{item}}</span>
        <i></i>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "patientInformationCon",
    data() {
      return {
        name: "唐宏亮",
        nameInfo: ["男，", "20岁，", "80kg"]
      }
    }
  }
</script>

<style scoped>
  .patientInformationCon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    flex-direction: column;
  }

  .patientInformationCon div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 103px;
    border-bottom: 1px solid #ebebeb;
    background-color: white;
    line-height: 100px;
    padding: 0 36px;
  }

  .patientInformationCon div i {
    display: inline-block;
    width: 16px;
    height: 24px;
    background-image: url("../../assets/img/home/hcp_into.png");
    background-size: 16px 24px;
    margin-left: 10px;
  }

  .spa {
    display: inline-block;
    width: 100%;
    height: 85px;
    color: #999999;
    border-top: 1px solid #ebebeb; /*no*/
    background-color: #f4f4f4;
    line-height: 120px;
    font-size: 22px;
    padding: 0 36px;

  }

  .name {
    font-size: 30px;
    color: #333333;
    font-weight: bold;
  }

  .sex {
    font-size: 28px;
    color: #999999;
  }
</style>
