<template>
  <div class="medicalHistory">
    <label class="textWrapper">
      <textarea maxlength="50" @click="remove" v-model="medicalHistory"></textarea>
      <div class="textNum">
        <span>{{textNum}}</span>/50
      </div>
    </label>

  </div>
</template>

<script>
  export default {
    name: "medicalHistory",
    data() {
      return {
        medicalHistory: "请填写过往病史（选填）",
        textNum: 0
      }
    },
    methods: {
      remove() {
        this.medicalHistory = ""
      }
    },
    watch: {
      medicalHistory(newVal) {
        this.textNum = newVal.length;
        this.$emit('illHistory', newVal)
      }
    }
  }
</script>

<style scoped>

</style>
