const express=require("express");
const app=express();
const path=require("path");
const cors=require("cors");




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));//it makes sure that incoming data (e.g., from a POST request) is automatically parsed as JSON.
app.get('/getdata',(req,res)=>{
    res.sendFile(path.join(__dirname,"user.json"));

})

app.get('/particulardata',(req,res)=>{
   const filePath=path.join(__dirname,"user.json");
   fs.readFile(filepath,"utf-8",(err,data)=>{
    if(err){
        res.send("error data");
    }
    else{
        let jsonData=JSON.parse(data);
        let filterData=jsonData.filter(item=>item.selected=="true");

        res.send(filterData);
    }
   })
})
app.listen(8080,()=>{
    console.log("server start");
})