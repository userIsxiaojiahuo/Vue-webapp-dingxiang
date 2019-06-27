<template>
  <div class="infoCon">
    <div class="textContent">
      <textarea class="textHtml" :placeholder="placeholderText">

      </textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: "illinessInfo",
    props: {
      placeholderText: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .textHtml {
    width: 100%;
    height: 250px;
    border: none;
    outline: none;
    caret-color: #28b7a3;
    border-bottom: 1px solid #ebebeb;
  }

  .textHtml::placeholder {
    font-size: 30px;
    color: #cccccc;
  }
</style>
