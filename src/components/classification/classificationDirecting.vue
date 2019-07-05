<template>
    <div>
        <p>{{direcMsg.text}}</p>
        <router-link
                :src="direcMsg.oneRmb"
                to="/Diagonse"
                tag="img"
        >
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "classificationDirecting",
        props:["direcMsg"]
    }
</script>

<style scoped>
p{
    font-size:32px;
    color:#999999;
    font-weight: bolder;
    text-align: center;
    text-indent: 20px;
}
    img{
        width:710px;
        height: 136px;
        position: fixed;
        bottom: 30px;
        margin-left: 20px;
    }
</style>