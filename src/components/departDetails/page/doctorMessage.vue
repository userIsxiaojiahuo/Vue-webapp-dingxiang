<template>
    <div class="doctorsMessage">
        <div class="doctorMess" @click.stop="toDoctorMessage($event)" v-for="(item,index) in doctorMessages"
             :key="index">
            <div class="messageLeft">
                <div class="headerImg">
                    <img :src="item.doc_img" alt="">
                </div>
                <i v-if="item.is_recommend"></i>
            </div>
            <div class="messageRight">
                <div class="messageName">
                    <span class="doctorName">{{item.doc_name}}</span>
                    <span class="rank">{{item.rank}}</span>
                </div>
                <p class="doctorMessPdom">
                    <span class="rank">{{item.doc_title}}</span>
                    <span class="rank hospitalAddress">{{item.hop_name}}</span>
                </p>
                <p class="doctorMessPdom beGoodAt">
                    擅长:{{item.doc_goods}}
                </p>
                <div class="achievement">
                    <span class="starLevel">{{item.d_level}}.0</span>
                    <span class="doctorSpanDom monthNum">{{item.m_answer}}</span>
                    <span class="doctorSpanDom monthRecipe" v-if="item.isMonthRecipe">月处方{{item.m_recipel}}</span>
                    <span class="doctorSpanDom upTime">{{item.avg_response}}分钟响应</span>
                </div>
                <div class="representative" v-if="item.isDesignation">
                    {{item.honor}}
                </div>
                <div class="bidPrice">
                    <div class="price">
                        <span class="spanText imgPrice">图文￥{{item.text_price}}</span>
                        <span class="spanText priceRule" v-if="item.tel_price">|</span>
                        <span class="spanText phonePrice" v-if="item.tel_price">电话￥56</span>
                    </div>
                    <img @click.stop="handleToImgInquiry($event)" v-if="item.avg_response"
                         src="../../../assets/images/askdoctor/doctors/ask_doctor.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dxHighlyRecomIcon from '../../../components/public/dxHighlyRecomIcon'

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
            },
            handleToImgInquiry() {
                this.$router.push({
                    path: "/conPic"
                })
            }
        },
        components: {
            dxHighlyRecomIcon
        }
    }

</script>

<style scoped>
    .doctorMess {
        display: flex;
        padding-top: 44px;
        overflow: hidden;
        border-bottom: 1px solid #ebebeb; /*no*/
        padding-bottom: 56px;
    }

    .messageLeft {
        float: left;
        position: relative;
        margin-right: 25px;
    }

    .headerImg > img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }

    .messageLeft > i {
        display: block;
        width: 88px;
        height: 40px;
        margin-top: 12px;
        background: url("../../../assets/images/askdoctor/doctors/ic_list_translate.png") no-repeat;
        background-size: cover
    }

    .messageRight {
        float: right;
        padding-right: 30px;
    }

    .doctorName {
        font-size: 28px;
        font-weight: 700;
        color: #333333;
        padding-right: 10px;
    }

    .rank {
        font-size: 20px;
        color: #666666;
    }

    .hospitalAddress {
        margin-left: 10px;

    }

    .doctorMessPdom {
        line-height: 46px;
        /*margin: 20px 0 20px 0;*/
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .beGoodAt {
        display: -webkit-box;
        /*overflow: hidden;*/
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        overflow: hidden;
        /* autoprefixer: on */
        font-size: 22px;
        color: #999999;
    }

    .achievement {
        display: flex;
    }

    .starLevel {
        width: 65px;
        display: inline-block;
        background: url("../../../assets/images/askdoctor/doctors/s_icon_rating_star_d.png") no-repeat left center;
        background-size: 20px 20px;
        padding-left: 25px;
        color: #ffb60b;
        font-size: 12px;
    }

    .doctorSpanDom {
        font-size: 22px;
        color: #666666;
    }

    .monthNum {
        padding: 0 10px 0 10px;
    }

    .upTime {
        padding-left: 12px;
    }

    .representative {
        height: 50px;
        background: url("../../../assets/images/askdoctor/doctors/ry_img.png") no-repeat left center;
        background-size: 246px 50px;
        text-indent: 38px;
        line-height: 50px;
        font-size: 20px;
        color: #219c8b;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .bidPrice {
        display: flex;
        justify-content: space-between;
    }

    .bidPrice > .price {
        padding-top: 15px;
    }

    .bidPrice > img {
        width: 142px;
        height: 64px;
    }

    .spanText {
        font-size: 24px;
        color: #6f7580;
        font-weight: bolder;
    }

    .priceRule {
        margin: 0 20px 0 20px;
        color: #ebebeb;
        font-weight: 100;
    }


</style>
