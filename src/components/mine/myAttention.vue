<template>
  <div class="myAttention">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <dxDefaultPage v-slot:DefaultPageLogo :DefaultPageTxt="DefaultPageTxt" v-if="!isHaveDefault">
      <img class="imgAuto" src="../../assets/img/defaultPage/ic_doctor_empty.png" alt="">
    </dxDefaultPage>
    <DoctorMessage :isShowHospital="isShowHospital" :doctorMessages="doctorMessages"
                   v-if="isHaveDefault"></DoctorMessage>
  </div>
</template>

<script>
  import dxHeaderReturn from '../../components/public/dxHeaderReturn'
  import dxDefaultPage from '../../components/public/dxDefaultPage'
  import DoctorMessage from "../../components/departDetails/page/doctorMessage"

  /**
   * 我的关注
   */
  export default {
    name: "myAttention",
    data() {
      return {
        headerReturnTitle: {
          title: "我关注的医生"
        },
        DefaultPageTxt: {
          txt: "暂无关注的医生"
        },
        isShowHospital: {
          showHeader: false,
          isShowAskDiv: true
        },
        doctorMessages: [],
        isHaveDefault: true
      }
    },
    components: {
      dxHeaderReturn, dxDefaultPage, DoctorMessage
    },
    created() {
      this.$store.dispatch("GetInfo", true);
      this.$axios({
        method: "get",
        url: 'http://121.199.63.71:9006/my_focus/?token=' + this.common.getCookie('token')
      }).then((returned) => {
        if (returned.status === 200) {
          this.$store.dispatch("GetInfo", false);
          if (returned.data.code === 200 && returned.data.data !== "暂无关注") {
            this.isHaveDefault = true;
            console.log(returned.data.msg)
            console.log(returned.data)
            this.doctorMessages = returned.data.data
          } else {
            this.isHaveDefault = false;
          }
        }
      })
    }
  }
</script>

<style scoped>
  .myAttention {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
<style src="../../assets/css/departDetails.css"></style>
