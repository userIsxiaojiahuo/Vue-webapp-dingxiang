<template>
    <div class="searchBox">
        <router-link
                tag="div"
                to="/illnessTwo"
                class="search">
            <i :style="{
        'background':'url('+ searchMsg.icon+')'+'no-repeat',
        'backgroundSize':'cover'
        }"
            ></i>
            <input type="text" :placeholder="searchMsg.placeholderMsg"/>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "illnessSearch",
        props: ["searchMsg"]
    }
</script>

<style scoped>

</style>
