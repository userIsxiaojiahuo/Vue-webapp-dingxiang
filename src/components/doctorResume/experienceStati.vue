<template>
    <div class="experienceTime">
        <span class="experienceTimeYears"><i class="experienceTimeIDom">{{doctorMessage.years}}</i>年从业</span>
        <span class="experienceTimeSpan experienceTimeSpanMonthNum"><i class="experienceTimeIDom">{{doctorMessage.monthNum}}</i>次月回答</span>
        <span class="experienceTimeSpan experienceTimeYellow"><i class="experienceTimeStarLevel">{{doctorMessage.starLevel}}</i>分
            <img src="../../assets/images/askdoctor/doctorInfo/score_star.png" alt="">
        </span>
    </div>
</template>

<script>
    export default {
        name: "experienceStati",
        props: {
            doctorMessage: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .experienceTime {
        display: flex;
        padding: 0 20px 0 30px;
        line-height: 112px;
    }

    .experienceTimeSpan {
        font-size: 18px;
        color: #acacac;
    }

    .experienceTimeSpanMonthNum {
        margin: 0 40px 0 40px;
    }

    .experienceTimeIDom {
        font-size: 40px;
        color: black;
        font-weight: bolder;
    }

    .experienceTimeYellow {
        color: #ffb300;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .experienceTimeYellow > img {
        float: right;
        width: 134px;
        height: 22px;
    }

    .experienceTimeStarLevel {
        font-size: 40px;
        font-weight: bolder;
    }
</style>