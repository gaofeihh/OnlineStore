<template>
    <div class="home">
<!--        首页头部-->
        <nav-bar>
            <template name="left">
            </template>
            <template name="middle">
                首页
            </template>
            <template name="right"></template>
        </nav-bar>
        <div class="wrap" ref="wrap"> <!--设置滚动区域,则除去头部和导航栏的部分就是剩余的滚动区域-->
            <div class="content"><!--设置滚动内容,必须将下面的内容全部包裹在一个div中,且其总长度大于.wrap的长度才可以滚动-->
                <common-swiper :banner="banner"/>
                <home-recommend :recommend="recommend"/>
                <home-popular/>

            </div>
        </div>

    </div>
</template>

<script>
    import requestSwiperPhoto from "../../api/home";
    import CommonSwiper from "../../swiper/Swiper";
    import HomeRecommend from "./base/HomeRecommend";
    import HomePopular from "./base/HomePopular";
    import BScroll from "better-scroll"
    export default {
        name: "Home",
        components: {HomePopular, HomeRecommend, CommonSwiper},
        data(){
            return {
                banner:[],
                recommend:[],
            }
        },
        created() {
            //发起对轮播图的数据请求
            this.getSwiperData();

        },
        mounted() {
          //使用better-scroll
          new BScroll(this.$refs.wrap);
        },
        methods:{
           /* getSwiperData() {
                const result = requestSwiperPhoto();
                console.log("getSwiperData"+result);
           }
            */
            async getSwiperData() {
                const result = await requestSwiperPhoto();
                // this.banner = result.data.banner;
                // this.recommend = result.data.recommend;
                //上述的写法可以利用下面的写法提高效率
                var requestData = result.data;
                this.banner = requestData.banner;
                this.recommend = requestData.recommend;
            }
        }
    }
</script>

<style scoped lang="less">
    .home{
        /*让其脱离文档流,从而解决进入开始动画一上一下的问题*/
        position: absolute;
        width: 240px;
    }
    /*设置滚动区域*/
    .wrap{
       height:calc(540px - 84px); /*注意减号两边必须要有空格,不然报错*/

    }

</style>