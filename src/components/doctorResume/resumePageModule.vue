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

<style scoped>
    .resumeCon {
        background: #f4f4f4;
        padding: 20px 0 20px 0;
    }

    .resumecontent {
        background: white;
        padding-left: 30px;
    }

    .resumeTitle {
        padding-right: 30px;
        border-bottom: 1px solid #ebebeb; /*no*/
        padding-bottom: 26px;
        padding-top: 18px;
    }

    .resumeTitle > h3 {
        font-size: 32px;
        color: #333333;
        line-height: 64px;
    }
</style>