<template>
    <div class="patient">
        <HotConsult class="hotConsult" :hotQuertions="hotQuertions"></HotConsult>
    </div>
</template>

<script>
    import HotConsult from "./hotConsult"

    export default {
        name: "patientEstimate",
        components: {
            HotConsult
        },
        props: {
            hotQuertions: {
                type: Array
            }
        }
    }
</script>