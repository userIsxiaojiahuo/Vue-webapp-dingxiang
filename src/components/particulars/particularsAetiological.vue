<template>
    <div>
        <ul class="list">
            <li v-for="(item,index) in particMsg">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "particularsAetiological",
        props:["particMsg"]
    }
</script>

<style scoped>
 .list{
     margin-left:45px;
     margin-top: 22px;
}
    .list li{
        list-style: disc!important;
        font-size:28px;
        color:#666666;
        line-height: 54px;
        font-weight: 500;
    }
</style>