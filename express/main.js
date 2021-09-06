
const express=require("express")
const app=express()


// To get

app.get("/",(req,res)=>{
    res.send("sapna Deshmukh")
})
app.listen(7000,()=>{
    console.log("server is running on port 7000")
})



// to post
app.use(express.json())

app.post("/",(req,res)=>{
    main={
        name:req.body.name,
        age:req.body.age
    }
    res.send(main)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})



// to put
app.put("/:name",(req,res)=>{
    main={
        name:req.body.name,
        age:req.body.age

    }
    res.send(main)
    console.log("data updated")
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})



// to delete
app.delete("/deleted/:name",(req,res)=>{
    if(req.params == "jyoti"){
        req.body.name.del(name)
    }
    // main={
    //     name:req.body.name,
    //     age:req.body.age

    // }
    res.send("ff")
    console.log("data updated")
    console.log(req.body.name)
})