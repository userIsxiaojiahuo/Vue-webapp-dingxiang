<template>
  <div class="infoCon">
    <div class="textContent">
      <label>
        <textarea class="textHtml" :placeholder="placeholderText"></textarea>
      </label>
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
  /*
  病情输入框
  */
  .textHtml {
    width: 100%;
    height: 250px;
    border: none;
    outline: none;
    caret-color: #28b7a3;
    padding: 20px 30px 0;
    line-height: 50px;
  }

  .textHtml::placeholder {
    font-size: 30px;
    color: #cccccc;
  }
</style>
