import request from "./request";

//进行跨越请求

export default ()=>{

    const data = request("http://localhost:8080/api/swiperData")
    data.then((res)=>console.log(res))

    //重点解析====返回data是promise对象
    return data
}
