var express = require('express');
const fs=require('fs')
var app = express(); 
var PORT = 5000; 

app.use(express.json());
  
  
app.post('/profile', function (req, res) {
    var q=req.body

    console.log(q)
    var a=fs.readFileSync("demo.json","utf-8")
    const data1=JSON.parse(a)
    console.log(data1)
    
    data1.push(q)
    console.log(data1)
    const data=JSON.stringify(data1,null,4)
    fs.writeFileSync("demo.json",data)

    console.log(req.body);
    fs.writeFile("demo.json",)

    
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});