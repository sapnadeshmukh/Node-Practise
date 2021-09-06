const express=require("express")
const app=express()
const port=1300;
const path=require("path")

const bodyparser=require("body-parser")
// app.use(bodyparser)

app.get("/about",function(req,res){
    // console.log(__dirname);
    res.sendFile(__dirname+"/index.html")
})


app.get("/home",function(req,res){
    res.send("<h1> Navgurukul </h1>")
})

app.get("/path",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"))

})



app.get("/ex/:name/:age",function(req,res){
    res.send(req.params.name +":"+req.params.age);
    console.log(req.params)
    })
app.listen(port,function(req,res){
    console.log( `server is ruuning on  ${port}`)
})