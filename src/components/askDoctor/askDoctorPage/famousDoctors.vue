<template>
    <router-link tag="div" :to="message.path" class="famousDoctor" :class="{'active':show==index}">
        <div class="famousImg">
            <img :src="message.imgs" alt="">
        </div>
        <div class="famouseMessage">
            <h3>{{message.title}}</h3>
            <p>{{message.textHtml}}</p>
        </div>
    </router-link>
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