<template>
  <!--    每周提问-->
  <div class="diagonseQuiz">
    <span>每周可提问义诊问题<i class="quizCount">5</i>次</span>
    <a href="" @click="handlelookUp">查看</a>
  </div>
</template>

<script>
  export default {
    name: "diagonseQuiz",
    methods: {
      handlelookUp() {
        this.$router.push({
          path: "/examine"
        })
      }
    }
  }
</script>

<style scoped>
  .diagonseQuiz {
    width: 100%;
    height: 88px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .quizCount {
    color: #ffb300;
    font-style: normal;
    margin: 0 10px;
  }
</style>
