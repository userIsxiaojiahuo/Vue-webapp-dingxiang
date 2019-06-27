<template>
    <div class="doctorsMessage">
        <div class="doctorMess" @click="toDoctorMessage" v-for="(item,index) in doctorMessages" :key="index">
            <div class="messageLeft">
                <div class="headerImg">
                    <img :src="item.headerImg" alt="">
                </div>
                <i
                        :style="{
                            background:'url('+item.recommend+')' + 'no-repeat',
                            backgroundSize:'cover'
                       }"
                ></i>
            </div>
            <div class="messageRight">
                <div class="messageName">
                    <span class="doctorName">{{item.name}}</span>
                    <span class="rank">{{item.rank}}</span>
                </div>
                <p class="doctorMessPdom">
                    <span class="rank">{{item.department}}</span>
                    <span class="rank hospitalAddress">{{item.hospitalAddress}}</span>
                </p>
                <p class="doctorMessPdom beGoodAt">
                    擅长:{{item.beGoodAt}}
                </p>
                <div class="achievement">
                    <span class="starLevel">{{item.starLevel}}</span>
                    <span class="doctorSpanDom monthNum">月回答{{item.monthNum}}</span>
                    <span class="doctorSpanDom monthRecipe">月处方{{item.monthRecipe}}</span>
                    <span class="doctorSpanDom upTime">{{item.upTime}}分钟响应</span>
                </div>
                <div class="representative">
                    {{item.honor}}
                </div>
                <div class="bidPrice">
                    <div class="price">
                        <span class="spanText imgPrice">图片￥{{item.imgPrice}}</span>
                        <span class="spanText priceRule">|</span>
                        <span class="spanText phonePrice">电话￥{{item.phonePrice}}</span>
                    </div>
                    <img src="../../../assets/images/askdoctor/doctors/ask_doctor.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "doctorMessage",
        props: {
            doctorMessages: {
                type: Array
            }
        },
        methods: {
            toDoctorMessage() {
                this.$router.push({
                    path: "/doctorInfo"
                })
            }
        }
    }
</script>

<style scoped>

</style>