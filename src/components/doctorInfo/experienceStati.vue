<template>
    <div class="experienceTime">
        <span class="experienceTimeYears"><i class="experienceTimeIDom">{{doctorMessage.doctorMess.doc_exp}}</i>从业</span>
        <span class="experienceTimeSpan experienceTimeSpanMonthNum"><i class="experienceTimeIDom">{{doctorMessage.doctorMess.m_answer}}</i></span>
        <span class="experienceTimeSpan experienceTimeYellow"><i class="experienceTimeStarLevel">{{doctorMessage.doctorMess.d_level}}.0</i>分
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
