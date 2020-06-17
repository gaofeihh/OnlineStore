<template>
    <div class="sing-bar" @click="handleRouter">
        <!--插入图标-->
        <slot name="item-icon"></slot>
        <!--插入图标对应的文字-->
        <slot name="item-msg"></slot>
    </div>
</template>
<script>
    export default {
        name: "SingleBar",
        props:{
            path:{
                type:String,
                required:true
            }
        },
        methods:{
            handleRouter() {
                this.$router.push(this.path);
            }
        }
    }
</script>

<style scoped>
    .sing-bar{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>