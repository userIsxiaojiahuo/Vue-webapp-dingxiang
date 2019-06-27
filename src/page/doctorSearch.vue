<template>
  <div class="doctorSearch">
    <div class="Header">
      <drugBack></drugBack>
      <searchHeader :placeholderText="placeholderText"></searchHeader>
    </div>
    <doctorSearchHot></doctorSearchHot>
    <doctorSearchFooter :doctorSearchFooter="doctorSearchFooter"></doctorSearchFooter>
  </div>
</template>

<script>
  import drugBack from './../components/drugSearch/drugBack'
  import searchHeader from '../components/search/searchHeader'
  import doctorSearchFooter from './../components/doctorSearch/doctorSearchFooter'
  import doctorSearchHot from './../components/doctorSearch/doctorSearchHot'

  /**
   * 医生搜索
   */
  export default {
    name: "doctorSearch",
    components: {
      drugBack,
      searchHeader,
      doctorSearchFooter,
      doctorSearchHot
    },
    data() {
      return {
        doctorSearchFooter: [
          {
            title: '陈奇权'
          },
          {
            title: '李云'
          },
          {
            title: '任芳'
          },
          {
            title: '李志量'
          },
          {
            title: '王子洋'
          },
          {
            title: '杨希川'
          },
        ],
        placeholderText: "搜索医生"
      }
    }
  }
</script>

<style scoped>
  .Header {
    width: 100%;
    display: flex;
    background-color: #fcfcfc;
    justify-content: space-between;
    align-items: center;
    padding: 36px 30px 20px;
    border-bottom: 1px solid #ebebeb;
  }
</style>
