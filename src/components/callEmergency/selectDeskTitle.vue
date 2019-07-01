<template>
  <div class="selectDeskWrap">
    <p class="selectDeskTitle">{{selectDeskTitle}}</p>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "selectDeskTitle",
      props:["selectDeskTitle"]
    }
</script>

