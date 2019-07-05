<template>
    <div class="setTotal">
        <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
            <dxNextBtn @click.native="setNameOK" :headerReturnTitle="headerReturnTitle"></dxNextBtn>
        </dxHeaderReturn>
        <AmendContent @setName="setName" :contentMsg="contentMsg"/>
    </div>
</template>

<script>
    import dxHeaderReturn from "../components/public/dxHeaderReturn"
    import dxNextBtn from '../components/public/dxNextBtn'
    import AmendContent from "../components/setting/setAmendname/amendContent"
    // import AmendHeader from  "../components/setting/setAmendname/amendHeader"

    export default {
        name: "setAmendname",
        components: {
            dxHeaderReturn,
            AmendContent,
            dxNextBtn
        },
        data() {
            return {
                //头部·
                headerReturnTitle: {
                    title: "修改昵称",
                    txt:"完成",
                    path:'/Setting'
                },
                //修改昵称
                contentMsg: {
                    nickname: "fghjkl",
                    icon: require("../assets/img/public/ic_clear_white_24dp.png"),
                    txt: "2-16个字符，仅支持中文、英文大小写和数字组合，不支持纯数字"
                },
                inpVal:"",
            }
        },
    methods: {
        setNameOK(){
            let token = this.common.getCookie("token");
            console.log(token,this.inpVal);
            this.$axios({
                method:"post",
                headers:{token:token},
                url:"http://121.199.63.71:9006/update_nickname/",
                data:{
                    nick_name:this.inpVal
                }
            }).then((data) => {
                    if(data.status===200){
                        console.log(data);
                        if (data.data.code === 200) {

                        }
                    }


            })
        },setName(val){
            this.inpVal = val
        }
        }
    }
</script>

<style scoped>
    .setTotal {
        background-color: #ebebeb;
        height: 100%;
    }
</style>
