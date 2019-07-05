<template>
    <div class="hospitalMessageTitle">
        <div class="messagecon">
            <h3>医院信息</h3>
            <MessageList :hospitalMess="doctorMessage.hospitalMess"></MessageList>
        </div>
    </div>
</template>

<script>
    import MessageList from "./resumePage/messageList"

    export default {
        name: "hospitalMessage",
        components: {
            MessageList
        },
        props: ["doctorMessage"]
    }
</script>