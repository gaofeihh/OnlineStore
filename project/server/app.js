const express =  require("express")
const app = express();

app.get("/swiperData",(req,res)=>{
    res.send({
        data:{
            banner:["../assets/image/banner1.jpg","../assets/image/banner2.jpg","../assets/image/banner3.jpg","../assets/image/banner4.jpg"],
            recommend:[
                {
                    image:"../../../assets/image/recommend1.jpg",
                    title:"推荐1"
                },{
                    image:"../../../assets/image/recommend2.jpg",
                    title:"推荐2"
                },{
                    image:"../../../assets/image/recommend3.jpg",
                    title:"推荐3"
                },{
                    image:"../../../assets/image/recommend4.jpg",
                    title:"推荐4"
            }]
        }
    })
})

app.listen(8081, function () {
    console.log('success listen...8081');
});