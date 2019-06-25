<template>
<!--科室分类-->
<div class="departmentSort">
  <!--  每周提问-->
  <diagonseQuiz></diagonseQuiz>
  <!--  科室选择-->
  <departmentSortSelect :diagonseListDeparment="deparmentList"></departmentSortSelect>
</div>
</template>

<script>
  import diagonseQuiz from '../components/doctorDiagonse/diagonseQuiz'
  import departmentSortSelect from '../components/departmentSort/departmentSortSelect'
    export default {
      name: "departmentSort",
      components:{
        diagonseQuiz,
        departmentSortSelect
      },
      data(){
        return{
          deparmentList:["皮肤性病科","儿科","妇产科","泌尿外科","骨科","消化内科"]
        }
      }
    }
</script>

<style scoped>
  .departmentSort{
    width: 100%;
    height: 100%;
  }
</style>
