<template>
  <div class="hospitalSearch">
    <div class="Header">
      <drugBack></drugBack>
      <searchHeader :placeholderText="placeholderText"></searchHeader>
    </div>
    <hospitalSearchHot></hospitalSearchHot>
    <hospitalSearchFooter :hospitalSearchFooter="hospitalSearchFooter"></hospitalSearchFooter>
  </div>
</template>

<script>
  import drugBack from './../components/drugSearch/drugBack'
  import searchHeader from '../components/search/searchHeader'
  import hospitalSearchHot from './../components/hospitalSearch/hospitalSearchHot'
  import hospitalSearchFooter from './../components/hospitalSearch/hospitalSearchFooter'

  export default {
    name: "hospitalSearch",
    components: {
      drugBack,
      searchHeader,
      hospitalSearchHot,
      hospitalSearchFooter
    },
    data() {
      return {
        hospitalSearchFooter: [
          {
            title: '皮肤性病科'
          },
          {
            title: '儿科'
          },
          {
            title: '妇产科&生殖中心'
          },
          {
            title: '泌尿外科'
          },
          {
            title: '骨科'
          },
          {
            title: '内分泌科'
          },
          {
            title: '心血管内科'
          },
          {
            title: '神经内科'
          }
        ],
        placeholderText: "搜索医院"
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
