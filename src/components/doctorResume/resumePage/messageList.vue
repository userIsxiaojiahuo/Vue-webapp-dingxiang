<template>
    <div class="listDivCon">
        <div class="messageText" @click="toHospaital(hospitalMess.id)">
            <h3>
                <p class="meName">{{hospitalMess.hosp_name}}</p>
            </h3>
            <ul>
                <li class="listUls">
                    {{hospitalMess.hosp_level}}
                </li>
                <li class="listUls">
                    {{hospitalMess.medical_insurance}}
                </li>
            </ul>
        </div>
        <div class="messageText">

            <h3>
                <p class="meName">联系电话</p>
                <p class="mePhone">{{hospitalMess.hosp_tel}}</p>
            </h3>
        </div>
        <div class="messageText">

            <h3>
                <p class="meName nameNowrap">{{hospitalMess.hosp_addr}}</p>
            </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "messageList",
        props: ["isShowHospital", "hospitalMess"],
        methods: {
            toHospaital(id) {
                this.$router.push({
                    path: "/hospitalMessage",
                    query: {
                        id: id
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .messageText {
        padding-left: 80px;
        border-bottom: 1px solid #ebebeb; /*no*/
        line-height: 100px;
        padding-right: 30px;
        position: relative;
        /*padding-bottom: 24px;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        background: url("../../../assets/images/askdoctor/hospitalInfo/hcp_into.png") no-repeat 680px center;
        background-size: 16px 24px;
    }

    .listCon {
        padding-left: 30px;
    }

    .messageText > i {
        display: inline-block;
        width: 64px;
        height: 64px;
        position: absolute;
        top: 20px;
        left: 0;
    }

    .messageText > ul {
        overflow: hidden;
        padding: 0 0 10px 0;
    }


    .listUls {
        float: left;
        padding: 0 13px 0 13px;
        margin-right: 16px;
        line-height: 40px;
        border: 1px solid #bfeae4; /*no*/
        font-size: 20px;
        color: #3aa798;
        border-radius: 50px;
        /*height: 100%;*/
    }

    .acive {
        float: left;
        padding: 0 13px 0 35px;
        margin-right: 30px;
        line-height: 40px;
        font-size: 20px;
        color: #666666;
        border-radius: 50px;
        background: url("../../../assets/images/askdoctor/doctorInfo/ic_tag.png") left center no-repeat;
        background-size: 26px 26px;
    }

    .meName {
        font-size: 26px;
        color: #333333;
        display: inline-block;
    }

    .meNameBolder {
        font-weight: bolder;
        font-size: 34px;
        color: #202020;
    }

    .mePhone {
        float: right;
        margin-bottom: 10px;
        font-size: 20px;
        color: #999999;
        letter-spacing: 0;
        margin-right: 38px;
    }

    .nameNowrap {
        overflow: hidden;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>