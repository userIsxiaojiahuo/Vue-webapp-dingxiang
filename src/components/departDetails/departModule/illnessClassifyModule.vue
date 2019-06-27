<template>
    <div class="departmentClassify">
        <div class="illnessClassify" v-for="(item,index) in classifyHtml" :key="index">
            <ClassifyModule :message="item"></ClassifyModule>
        </div>
    </div>
</template>

<script>
    import ClassifyModule from "../page/ClassifyModule"

    export default {
        name: "illnessClassifyModule",
        components: {
            ClassifyModule
        },
        data() {
            return {}
        },
        props: {
            classifyHtml: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>