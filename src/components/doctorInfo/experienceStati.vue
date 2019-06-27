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
