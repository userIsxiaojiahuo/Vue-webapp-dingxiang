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
        deparmentList: ["皮肤性病科", "儿科", "妇产科", "泌尿外科", "骨科", "消化内科"]
      }
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
