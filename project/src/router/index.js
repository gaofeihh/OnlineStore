import Vue from 'vue'
import Router from 'vue-router'

//异步导入路由组件
const Home = ()=>import("../views/home/Home");
const Market = ()=>import("../views/market/Market");
const Category =()=>import("../views/category/Category");
const Profile = ()=>import("../views/profile/Profile");

Vue.use(Router);

const routes = [
    {
        path:"/home",
        component:Home,
        meta:{
            index:1
        }
    },
    {
        path:"/market",
        component:Market,
        meta:{
            index:2
        }
    },
    {
      path:"/category",
      component:Category,
        meta:{
            index:3
        }
    },
    {
        path:"/profile",
        component:Profile,
        meta:{
            index:4
        }
    }
]



export default new Router({
    routes,
    mode:"history"
})

