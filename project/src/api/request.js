import axios from 'axios'


//封装axios请求
    //建立拦截器,在发出响应到达then之前进行判断
    axios.interceptors.response.use(
        res=>{
            return res.data
        }
    )

export default function request(url,data={},method="get") {
    // if (method === "get") {
    //     axios.get(url,{params:data})
    //         .then((res)=>{
    //             return new Promise((resolve,reject)=>{
    //                 console.log("request里的data:");
    //                 console.log(res);
    //                 resolve(res)
    //             })
    //         })
    // } else{
    //     axios.post(url,data)
    //         .then((res)=>{
    //             return new Promise((resolve,reject)=>{
    //                 resolve(res)
    //             })
    //         })
    // }

    return new Promise((resolve,reject)=>{
            let p = null;
            if(method === "get") {
                p = axios.get(url,{
                    parmas:data
                })
            }else{
                p = axios.post(url,data)
            }
            p.then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
    })

}