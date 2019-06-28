<template>
    <div class="resumeCon">
        <div class="resumecontent">
            <div class="resumeTitle" v-for="(item,index) in resumeHtml" :key="index">
                <h3>{{item.title}}</h3>
                <ResumePageText :text="item.text"></ResumePageText>
            </div>
        </div>
    </div>
</template>

<script>
    import ResumePageText from "./resumePage/resumePageText"

    export default {
        name: "resumePageModule",
        components: {
            ResumePageText
        },
        props: {
            resumeHtml: {
                type: Array
            }
        }
    }
</script>