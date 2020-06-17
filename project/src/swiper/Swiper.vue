<template>
    <div  class="swiper">
        <swiper :options="swiperOption" v-if="banner.length!==0">
            <swiper-slide class="swiper-slide" v-for="(item,index) in banner" :key="index">
                <img :src="item"/>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- 左右箭头 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"CommonSwiper",
        props:{//接收父组件传递过来的banner数据
          banner:{
              type:Array,
              default() {
                  return [];
              }
          }
        },
        data(){
            return {
                swiperOption:{
                    //显示分页
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // //设置点击箭头
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    //自动轮播
                    autoplay: {
                        delay: 2000,
                        //当用户滑动图片后继续自动轮播
                        disableOnInteraction: false,
                    },
                    //开启循环模式
                    loop: true
                }
            }
        },
    }
</script>
<style scoped lang="less">
    //利用此等方式占位加上v-if来防止抖屏
    .swiper{
        width: 100%;
        height:0;
        padding-bottom:46%;//轮播图的图片大小为520*280 窗口宽度为240 则240/520=0.46 注意这里的百分比是相对于宽度的
    }
    .swiper img{
        width:100%;
    }

    //利用less的/deep/来设置分页器的颜色,.swiper-...是处于活动状态时,swiper给其加上的类名
    .swiper /deep/ .swiper-pagination-bullet-active{
        background-color: #ee9900;
    }

    .swiper-button-prev:after, .swiper-button-next:after{
        color: chocolate;
    }
</style>