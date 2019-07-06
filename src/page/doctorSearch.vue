<template>
  <div class="doctorSearch">
    <div class="Header">
      <drugBack></drugBack>
      <div class="doctorSearch_searchHeader">
        <input ref="input" v-model="val" @focus="inputVal()" type="text" :placeholder="placeholderText"/>
      </div>
    </div>
    <div v-if="isShowHotSearch">
      <doctorSearchHot></doctorSearchHot>
      <doctorSearchFooter :doctorSearchFooter="doctorSearchFooter"></doctorSearchFooter>
    </div>
    <div class="searchDiv">
      <DoctorMessage :isShowHospital="isShowHospital" :doctorMessages="doctorMessage"></DoctorMessage>
    </div>
  </div>
</template>

<script>
  import drugBack from './../components/drugSearch/drugBack'
  import searchHeader from '../components/search/searchHeader'
  import doctorSearchFooter from './../components/doctorSearch/doctorSearchFooter'
  import doctorSearchHot from './../components/doctorSearch/doctorSearchHot'
  import DoctorMessage from "../components/departDetails/page/doctorMessage"


  export default {
    name: "doctorSearch",
    components: {
      drugBack,
      searchHeader,
      doctorSearchFooter,
      doctorSearchHot,
      DoctorMessage
    },
    data() {
      return {
        val: "",
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
        placeholderText: "搜索医生",
        doctorMessage: [],
        isShowHospital: {
          showHeader: false,
          isShowAskDiv: true
        },
        isShowHotSearch: true
      }
    },
    methods: {
      inputVal() {
        window.onkeydown = (e) => {
          let even = e || window.event;
          if (even.keyCode == "13") {
            let url = "http://121.199.63.71:9006/doctor_top/";
            console.log(this.val + ' ' + url);
            this.$axios.post(url, {index: this.val}).then((data) => {
              if (data.data.code === 200) {
                console.log(data);
                this.isShowHotSearch = false;
                this.doctorMessage = data.data.datas
                console.log(this.doctorMessage)
              }
            })
          }
        }
      }
    },
    mounted() {
      this.$refs.input.focus()
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

  .doctorSearch_searchHeader {
    flex: 1;
  }

  .doctorSearch_searchHeader input {
    background: url("../assets/img/home/ic_search_after.png") no-repeat 30px center;
    background-size: 36px 36px;
    background-color: #f2f2f2;
    color: #bababa;
    height: 80px;
    font-size: 30px;
    line-height: 90px;
    text-indent: 80px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #f3f3f3; /*no*/
    outline: none;
    box-shadow: 10px 10px #fcfcfc;
  }

  .searchDiv {
    padding-left: 30px;
  }
</style>
