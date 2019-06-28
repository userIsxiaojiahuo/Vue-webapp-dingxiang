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