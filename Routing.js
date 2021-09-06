const path=require("path");
const express =require("express")
const app = express();
const port = 3000;

console.log(path.join(__dirname,".."));
// app.use(express.static());

// app.get("/",(req,res)=>{
//     res.write(" <h1>Welcome to my home page!!<h1>");
//     res.write(" <h1>Welcome to again my home page!!<h1>");
//     res.send()

// });
app.get("/about",(req,res)=>{
    res.statusCode(200).send("Welcome to my about page")
});
app.get("/contact",(req,res)=>{
    res.send("Welcome to my contact page")
});
app.get("/temp",(req,res)=>{
    res.json({
        id:1,
        name:"sapna"
    })
});
app.listen(port,()=>{
    console.log(`listening to the port no ${port}`);

});

