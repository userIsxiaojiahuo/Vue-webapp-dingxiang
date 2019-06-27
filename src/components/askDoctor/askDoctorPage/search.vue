<template>
    <div class="searchContainer">
        <div class="searchInput">
            <i
                    :style="{
                    'background':'url(' + place.icon+')' + 'no-repeat',
                    'backgroundSize':'cover'

                    }"
            ></i>
            <input type="text" :placeholder="place.placeholderMessage" class="search">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: {
            place: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .searchContainer {
        width: 100%;
        margin-top: 30px;
    }

    .searchInput {
        width: 100%;
        padding: 0 30px 0 30px;
        position: relative;
    }

    .searchInput > i {
        width: 44px;
        height: 44px;
        position: absolute;
        left: 50px;
        top: 15px;
    }

    .search {
        width: 100%;
        height: 80px;
        background: #f5f5f5;
        border-radius: 15px;
        border: none;
        text-indent: 80px;
    }

    .search::placeholder {
        font-size: 25px;
        color: #9c9c9c;
    }
</style>