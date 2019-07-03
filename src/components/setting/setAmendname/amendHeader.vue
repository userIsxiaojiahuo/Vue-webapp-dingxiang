<template>
    <div class="conPicHeader" @click="handleClick">
        <p>保存</p>
    </div>
</template>

<script>
    export default {
        name: "amendHeader",
        methods: {
            handleClick() {
                this.$router.push(
                    {
                        path: "/setting"
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .conPicHeader {
        background-color: #fcfcfc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
    }

    .back {
        display: flex;
        align-items: center;
    }

    .back > img {
        width: 44px;
        height: 44px;
    }

    .back > h2 {
        font-size: 32px;
    }

    p {
        font-size: 24px;
        color: white;
        background-color: #28b7a3;
        width: 118px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-radius: 6px;
    }
</style>



