<template>
    <div class="hospitalMessageTitle">
        <div class="messagecon">
            <h3>医院信息</h3>
            <MessageList :messageImg="messageImg" :hospitalMess="doctorMessage"></MessageList>
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
        props: ["doctorMessage", "messageImg"]
    }
</script>