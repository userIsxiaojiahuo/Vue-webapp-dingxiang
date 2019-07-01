<template>
    <div class="resumeText">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "resumePageText",
        props: {
            text: {
                type: String
            }
        }
    }
</script>