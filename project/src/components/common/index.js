//该文件是用来将上面的通用组件注册为全局组件
import Vue from 'vue'
const componentConfig = require.context("./",true,/\.vue$/);
componentConfig.keys().forEach(fileName=>{
    const componentEntry = componentConfig(fileName);
    console.log(componentEntry);
    Vue.component(
        componentEntry.default.name,
        componentEntry.default
    )
})