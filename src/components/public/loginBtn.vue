<template>
  <div class="loginUnder">
    <div class="loginBtn">
      <button class="btn" :disabled="!(protocolOK&&inputOK)">
        <slot name="loginBtn"></slot>
      </button>
    </div>
  </div>
</template>

<script>
  import newVue from '../../assets/js/newVue.js'

  export default {
    name: "loginBtn",
    data() {
      return {
        show: true,
        protocolOK: true,
        inputOK: false
      }
    },
    methods: {},
    mounted() {
      newVue.$on('protocolOK', (protocolOK) => {
        this.protocolOK = protocolOK;
        console.log(this.protocolOK)
      });
      newVue.$on('inputOK', (inputOK) => {
        this.inputOK = inputOK;
        console.log(this.inputOK)
      })
    }
  }
</script>

<style scoped>
  .loginUnder {
    margin: 40px;
  }

  .btn {
    width: 100%;
    height: 90px;
    background: #28b7a3;
    border-radius: 3px;
    border: 0;
    font-size: 30px;
    color: white;
  }

  button[disabled] {
    background: #90d8d2;
  }


</style>
