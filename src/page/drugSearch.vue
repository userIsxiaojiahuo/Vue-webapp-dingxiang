<template>
  <div class="drugSearch">
    <div class="Header">
      <drugBack></drugBack>
      <searchHeader :placeholderText="placeholderText"></searchHeader>
    </div>
    <drugSearchHot></drugSearchHot>
    <drugSearchFooter :drugSearchFooter="drugSearchFooter"></drugSearchFooter>
  </div>

</template>

<script>
  import drugBack from './../components/drugSearch/drugBack'
  import searchHeader from '../components/search/searchHeader'
  import drugSearchHot from './../components/drugSearch/drugSearchHot'
  import drugSearchFooter from './../components/drugSearch/drugSearchFooter'

  export default {
    name: "drugSearch",
    components: {
      searchHeader,
      drugSearchHot,
      drugSearchFooter,
      drugBack
    },
    data() {
      return {
        placeholderText: "搜索药品",
        drugSearchFooter: [
          {
            title: '痤疮'
          },
          {
            title: '感冒'
          },
          {
            title: '咳嗽'
          },
          {
            title: '退热'
          },
          {
            title: '镇痛'
          },
          {
            title: '避孕'
          },
          {
            title: '腹泻'
          },
          {
            title: '便秘'
          },
          {
            title: '痛经'
          },
          {
            title: '鼻炎'
          }
        ]
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
