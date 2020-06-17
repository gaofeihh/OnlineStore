<template>
        <ul class="home-recommend">
            <li v-for="item in recommend" class="home-recommend-item">
                <img :src="item.image">
                <p>{{item.title}}</p>
            </li>
        </ul>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .home-recommend{
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex: 1;
        justify-content: space-around;
    }
    .home-recommend .home-recommend-item{
        width: 24%;
    }
    .home-recommend .home-recommend-item img{
        width: 100%;
        border-radius: 50%;
    }
    .home-recommend .home-recommend-item p{
        font-size: 12px;
        text-align: center;
    }
</style>