<template>
    <div class="tab-bar">
        <single-bar path="/home">
            <template v-slot:item-icon>
                <div class="iconfont icon-shouye"></div>
            </template>
            <template v-slot:item-msg>
                <div>首页</div>
            </template>
        </single-bar>

        <single-bar path="/market">
            <template v-slot:item-icon>
                <div class="iconfont icon-gouwuche"></div>
            </template>
            <template v-slot:item-msg>
                <div>购物车</div>
            </template>
        </single-bar>

        <single-bar path="/category">
            <template v-slot:item-icon>
                <div class="iconfont icon-fenlei-"></div>
            </template>
            <template v-slot:item-msg>
                <div>分类</div>
            </template>
        </single-bar>

        <single-bar path="/profile">
            <template v-slot:item-icon>
                <div class="iconfont icon-yonghu"></div>
            </template>
            <template v-slot:item-msg>
                <div>用户</div>
            </template>
        </single-bar>
    </div>
</template>

<script>
    // import SingleBar from "./SingleBar";
    export default {
        name: "TabBar",
        components:{
            // SingleBar
        },
        //处理混动动画是往左还是往右
        watch:{

        }
    }
</script>

<style scoped>
    @import  '../../../assets/css/font_ttvocerjff/iconfont.css';
    .tab-bar{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>