const express=require("express");
const app=express();
app.use(express.static(__dirname+"/public"))


app.get("/photo",function(req,res){
    // res.sendFile(__dirname + "/photo.html")
    res.send("welcome")
})
app.listen(7000);