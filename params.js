const express=require('express');
const app=express();
app.get('/:name/:secondname',function(req,res){
    console.log(req.params)
    res.send("hello "+ req.params.name + req.params.secondname)
});

// without params
app.post('/profile',function(req,res){
    res.send("Hello Sapna")
});

// with params
app.post('/profile/:name',function(req,res){
    res.send("Hello" +" "+ req.params.name)
});


const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`listening on port ${port}............`)
})


const express=require("express");
const server =express();
server.get("/home/:name/:age",function(req,res){
    console.log(req.params)
    res.send(req.params);
})
server.listen(8000,function () {
    console.log("server started")
    
})
const http=require("http")
const server=http.createServer((req,res)=>{
    res.end("Helloooooooo Sapna")
})
