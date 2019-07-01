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

