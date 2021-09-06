const express=require("express")
const app=express()
const port = 3000;

const students=require("./student.js")
console.log(students)
  


app.get("/sapna",(req,res)=>{
    res.send(students)
});



app.get("/contact/:id",(req,res)=>{
    let id=req.params.id

    let index=0
    while (index<students.length){
        if (students[index]["id"]==id){
            res.send(students[index])


        }
        index++;
    }

});










app.post("/about",(req,res)=>{
    // res.send("postdata.....")
    let id = students.length+1
    name :req.body.name
    age:req.body.age
});

app.post("/api/students",(req,res)=>{
    if(!req.body.age){
        res.status(400)
        return res.json({error :"age is required"})
    }
    const user={
        name:students.length+1,
        name:req.body.name,
        age:req.body.age

    }
    students.push(user)
    res.json(user)
})

app.put("/hello",(req,res)=>{
    res.send("put worked.....")
});





app.put("/api/students/:id",(req,res)=>{
    const id=req.params.id
    console.log(id);
    res.json(id)
})

app.delete("/deletedata",(req,res)=>{
    res.send("deleting data.......")
});





app.listen(port,()=>{
    console.log(`listening to the port no ${port}`);

});