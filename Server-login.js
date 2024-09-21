const express = require('express');
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/Login",(req,res)=>{
    console.log(req.body);
    res.send("true");
})

app.listen(5000,()=>{
    console.log("server started at port 5000");
})
