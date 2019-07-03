<template>
    <div class="setTotal">
        <dxHeaderReturn :headerReturnTitle="headerTitle">
            <AmendHeader/>
        </dxHeaderReturn>
        <AmendContent :contentMsg="contentMsg"/>
    </div>
</template>

<script>
    import dxHeaderReturn from "../components/public/dxHeaderReturn"
    import AmendContent from "../components/setting/setAmendname/amendContent"
    import AmendHeader from  "../components/setting/setAmendname/amendHeader"
    export default {
        name: "setAmendname",
        components: {
            dxHeaderReturn,
            AmendContent,
            AmendHeader

        },
        data() {
            return {
                //头部·
                headerTitle: {
                    title: "修改昵称",
                    ico:require("../assets/onlineImg/ic_titlebar_back.png")
                },
                //修改昵称
                contentMsg: {
                    nickname: "fghjkl",
                    icon: require("../assets/img/public/ic_clear_white_24dp.png"),
                    txt: "2-16个字符，仅支持中文、英文大小写和数字组合，不支持纯数字"
                }
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