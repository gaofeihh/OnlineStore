<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style lang="less" scoped>
    .nav-bar{
        width: 100%;
        height: 30px;
        display: flex;
        background-color:red;
        .left{
            width: 20%;
            height: 100%;
            background-color: #0086b3;
        }
        .middle{
            width: 60%;
            height: 100%;
            background-color: yellow;
        }
        .right{
            width: 20%;
            height: 100%;
            background-color: orchid;
        }
    }
</style>