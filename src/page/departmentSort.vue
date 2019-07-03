<template>
  <!--科室分类-->
  <div class="departmentSort">
    <dxHeaderReturn urn :headerReturnTitle="headerMessage">
      <dxHeaderIcon/>
    </dxHeaderReturn>
    <!--  每周提问-->
    <diagonseQuiz></diagonseQuiz>
    <!--  科室选择-->
    <departmentSortSelect :diagonseListDeparment="deparmentList"></departmentSortSelect>
  </div>
</template>

<script>
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxHeaderIcon from "../components/public/dxAttentionBtn"
  import diagonseQuiz from '../components/doctorDiagonse/diagonseQuiz'
  import departmentSortSelect from '../components/departmentSort/departmentSortSelect'

  export default {
    name: "departmentSort",
    components: {
      dxHeaderReturn,
      dxHeaderIcon,
      diagonseQuiz,
      departmentSortSelect
    },
    data() {
      return {
        headerMessage: {
          title: "返回",
        },
        deparmentList: [],
        isShowDiv: true
      }
    },
    mounted() {
      this.$store.dispatch("GetInfo", true)
      this.$axios.get("http://121.199.63.71:9006/ask_doctor").then((data) => {
        console.log(data)
        if (data.data.code === 201) {
          this.$store.dispatch("GetInfo", false)
          data.data.ofc_data.map((index) => {
            index.departments_info.map((item) => {
              this.deparmentList.push(item)
            })
          })
        }
      })
    }
  }
</script>

<style src="../../src/assets/css/departmentSortSelect.css"></style>
<style scoped>
  .departmentSort {
    width: 100%;
    height: 100%;
  }
</style>
