<template>
  <div id="app">
      <div class="router-part">
          <slide-transition :name="name">
              <template>
                  <router-view></router-view>
              </template>
          </slide-transition>
      </div>
      <div class="nav-content">
        <tab-bar></tab-bar>
      </div>
  </div>
</template>

<script>
import TabBar from "./components/common/tabBar/TabBar";
import SlideTransition from "./components/common/slideTransition/SlideTransition";

export default {
  name: 'App',
  components: {
      SlideTransition,
      TabBar
  },
    data() {
      return {
          name:""
      }
    },
    watch:{
        //处理滑动方法
        $route(to,from) {
            if (from.path==="/") {
                return
            }
            console.log(to,from);
            if (to.meta.index>from.meta.index) {
                this.name="left";
            } else{
                this.name="right";
            }
        }
    }
}
</script>

<style>
    #app{
        width:240px;
        height:540px;
        margin:40px auto;
        border:1px solid #bbbbbb;
    }

    #app .router-part{
        width:100%;
        height:90%;
        border:1px solid #bbbbbb;

    }

    #app .nav-content{
        width:100%;
        height:10%;
    }

    /*#app .nav-content */
</style>
