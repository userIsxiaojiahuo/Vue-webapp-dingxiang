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
        props: {
            searchMsg: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .searchBox {
        width: 100%;
        height: 101px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .search {
        width: 690px;
        height: 80px;
        background-color: #f5f5f5;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }

    .search > i {
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-left: 26px;
    }

    .search input {
        outline: none;
        border: none;
        background-color: #f5f5f5;
        font-size: 28px;
        font-weight: bolder;
        margin-left: 30px;
    }

    .search input::placeholder {
        color: #999999;
    }
</style>
