<template>
    <div class="famousDoctor" :class="{'active':show==index}">
        <div class="famousImg">
            <img :src="message.imgs" alt="">
        </div>
        <div class="famouseMessage">
            <h3>{{message.title}}</h3>
            <p>{{message.textHtml}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: 0
            }
        },
        name: "FamousDoctors",
        props: {
            message: {
                type: Object
            },
            index: {
                type: Number
            }
        }
    }
</script>

<style scoped>
    .famousDoctor {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .famousImg {
        margin-right: 8px;
    }

    .famousImg > img {
        width: 112px;
        height: 112px;
    }

    .famouseMessage > p {
        font-size: 20px;
        color: #9a9a9a;
    }

    .active {
        border-right: 1px solid #ebebeb;
    }

    .cur {
        border-right: none;
    }
</style>