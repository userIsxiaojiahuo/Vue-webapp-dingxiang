<template>
  <div class="indexSearch">
    <searchHeader></searchHeader>
    <searchNav :searchNav="searchNav"></searchNav>
    <searchHot></searchHot>
    <searchFooter :searchFooter="searchFooter"></searchFooter>
  </div>
</template>

<script>
  import searchHeader from '../components/search/searchHeader'
  import searchNav from '../components/search/searchNav'
  import searchHot from '../components/search/searchHot'
  import searchFooter from '../components/search/searchFooter'

  /**
   * 首页搜索
   */
  export default {
    name: "indexSearch",
    components: {
      searchHeader,
      searchNav,
      searchHot,
      searchFooter
    },
    data() {
      return {
        searchNav: [
          {
            imgs: require('../assets/img/home/search1.jpg'),
            title: '医生',
            path: "doctorSearch"
          },
          {
            imgs: require('../assets/img/home/search2.jpg'),
            title: '医院',
            path: "hospitalSearch"
          },
          {
            imgs: require('../assets/img/home/search3.jpg'),
            title: '药品',
            path: "drugSearch"
          }
        ],
        searchFooter: [
          {
            isShow: true,
            title: '#安全变美#'
          },
          {
            isShow: true,
            title: '湿疹'
          },
          {
            isShow: true,

            title: '#新手爸妈训练营#'
          },
          {
            title: '毛孔粗大'
          },
          {
            title: '痘痘'
          },
          {
            title: '腹泻'
          },
          {
            title: '卵巢囊肿'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
