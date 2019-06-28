<template>
    <div class="hospitalMessageFooter">
        <Mode></Mode>
        <ModeList :modeText="modeText"></ModeList>
    </div>
</template>

<script>
    import Mode from "./page/mode"
    import ModeList from "./page/modeList"

    export default {
        name: "registrationMode",
        components: {
            Mode,
            ModeList
        },
        props: {
            modeText: {
                type: Array
            }
        }
    }
</script>