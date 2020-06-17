<template>
    <div class="slide-transition">
        <transition :name=name>
                <slot></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "SlideTransition",
        props:{
            name:{
                type:String
            }
        }
    }
</script>

<style scoped>
    .slide-transition{
        width: 100%;
        overflow: hidden;
        position: relative;
        height: 100%;
    }

    .right-enter-active{
        transform: translateX(-100%);
        transition: 2s;
    }
    .right-enter-to{
        transform: translateX(0);
    }

    .right-leave-active{
        transform: translateX(0);
        transition: 2s;
    }

    .right-leave-to{
        transform: translateX(100%);
    }


    .left-enter-active{
        transform: translateX(100%);
        transition: 2s;
    }
    .left-enter-to{
        transform: translateX(0);
    }

    .left-leave-active{
        transform: translateX(0);
        transition: 2s;
    }

    .left-leave-to{
        transform: translateX(-100%);
    }


</style>