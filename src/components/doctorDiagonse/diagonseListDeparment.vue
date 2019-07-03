<template>
  <!--  科室分类-->
  <div class="deparmentListsWarp">
    <div class="deparmentLists">
      <ul>
        <li v-for="(item,index) in diagonseListDeparment"
            @click="handleClickLi(index,item.id)"
            :key="index"
            :class="{deparmentListsLi:index===clickLi}"
        >
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="deparmentClassify" @click="handleClickDiv()">
      <img src="../../assets/img/diagonseImg/icon_classify.png" alt="">
    </div>
  </div>
</template>

<script>
  import Bug from "../../assets/js/newVue"

  export default {
    name: "diagonseListDeparment",
    props: ["diagonseListDeparment"],
    data() {
      return {
        clickLi: 0,
        doctorListMessage: []
      }
    },
    methods: {
      handleClickDiv() {
        this.$router.push({
          path: "/doctorDiagonse"
        })
      },
      handleClickLi(index, id) {
        this.clickLi = index;
        // 点击对应的科室渲染不同的数据
        let url = "http://121.199.63.71:9006/ask_doctor/" + id + "/";
        this.$axios.get(url).then((data) => {
          this.doctorListMessage = data.data.doct_data;
          console.log(this.doctorListMessage);
          //  把拿到的数据，传到父元素上渲染
          if (this.doctorListMessage !== "") {
            this.$emit("doctorInfo", this.doctorListMessage)
          }
        });
        Bug.$on("info", (index, id) => {
          this.clickLi = index;
          let url = "http://121.199.63.71:9006/ask_doctor/" + id + "/";
          this.$axios.get(url).then((data) => {
            this.doctorListMessage = data.data.doct_data;
            console.log(this.doctorListMessage);
            //  把拿到的数据，传到父元素上渲染
            if (this.doctorListMessage !== "") {
              this.$emit("doctorInfo", this.doctorListMessage)
            }
          });
        })
      }
    },
    // mounted() {
    //   console.log(this.diagonseListDeparment)
    // }
  }
</script>

<style scoped>
  .deparmentListsWarp {
    width: 100%;
    height: 97px;
    background: #28b7a3;
    color: #fff;
    font-size: 28px;
    display: flex;
  }

  .deparmentLists {
    overflow-x: auto;
    width: 87.66%;
    margin: 0 27px 0 0;
  }

  /*去掉横向滚动条*/
  .deparmentLists::-webkit-scrollbar {
    display: none;
  }

  .deparmentLists > ul {
    width: 790%;
    height: 100%;
  }

  .deparmentLists > ul > li {
    float: left;
    padding: 0 27px;
    height: 100%;
    line-height: 97px;
    flex-wrap: nowrap;
  }

  .deparmentClassify {
    width: 12.26%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .deparmentClassify::before {
    content: '';
    width: 1px; /*no*/
    height: 32px;
    background: #fff;
    position: absolute;
    left: 0;
  }

  .deparmentClassify > img {
    width: 32px;
    height: 32px;
  }

  .deparmentListsLi {
    background: #219c8b;
  }
</style>
