<template>
    <div class="home-popular">
        <!--本周流行为静态资源-->
        <p>本周流行</p>
        <img src="../../../assets/image/popular.png"/>
    </div>
</template>

<script>
    export default {
        name: "HomePopular"

    }
</script>

<style scoped>
    .home-popular{
        padding-top: 20px;
        width: 100%;
        font-size: 14px;
        text-align: center;
    }
    .home-popular img{
        margin-top: 8px;
        width: 100%;
    }
</style>