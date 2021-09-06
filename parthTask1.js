const express = require('express')

animal_sound={
    Dog:"bowbow",
    Cat : "maww maww",
    bird: "chiwchiw"

}
const app=express();


app.get("/animal/:animal_name",(req,res)=>{
    animal=req.params.animal_name;
    if(animal_sound[animal])
        res.send(animal_sound[animal])
    else{
        res.send("not a valid")
    }
})
app.listen(2000,()=>{
    console.log("server running on port")
})