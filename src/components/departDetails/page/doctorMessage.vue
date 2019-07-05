<template>
    <div class="doctorsMessage">
        <div class="doctorMess" @click="toDoctorMessage(item.id,item.d_name_id)"
             v-for="(item,index) in doctorMessages"
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
                    <span class="rank hospitalAddress">{{item.hop_name}}{{item.hosp_name}}</span>
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
                    <img @click.stop="handleToImgInquiry($event)" v-if="isShowHospital.isShowAskDiv"
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
        components: {
            dxHighlyRecomIcon
        },
        props: {
            doctorMessages: {
                type: Array
            },
            isShowHospital: {
                type: Object
            },
        },
        methods: {
            toDoctorMessage(id, doc_id) {
                if (id) {
                    this.$router.push({
                        path: "/doctorInfo",
                        query: {
                            id: id
                        }
                    })
                } else if (doc_id) {
                    this.$router.push({
                        path: "/doctorInfo",
                        query: {
                            id: doc_id
                        }
                    })
                }

            },
            handleToImgInquiry() {
                this.$router.push({
                    path: "/conPic"
                })
            }
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
        width: 100%;
    }

    .doctorName {
        font-size: 28px;
        font-weight: 700;
        color: #333333;
        padding-right: 10px;
        line-height: 44px;
    }

    .rank {
        font-size: 24px;
        color: #666666;
    }

    .hospitalAddress {
        margin-left: 10px;

    }

    .doctorMessPdom {
        line-height: 44px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        /* !autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 1;
    }

    .beGoodAt {
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        overflow: hidden;
        font-size: 22px;
        color: #999999;
        line-height: 54px;
    }

    .achievement {
        display: flex;
        line-height: 54px;
    }

    .starLevel {
        width: 65px;
        display: inline-block;
        background: url("../../../assets/images/askdoctor/doctors/s_icon_rating_star_d.png") no-repeat 0 10px;
        background-size: 27px 27px;
        padding-left: 25px;
        color: #ffb60b;
        font-size: 20px;
        line-height: 54px;
        text-indent: 3px;
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
