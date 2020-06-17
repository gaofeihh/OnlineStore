//进行跨域处理
const path = require("path")
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:"http://localhost:8081", //目标路径
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    "^/api":''//重写路径
                }
            }
        },
        contentBase:path.join(__dirname,'src')
    },

    // publicPath:"./",
    // assetsDir:"assets"

}