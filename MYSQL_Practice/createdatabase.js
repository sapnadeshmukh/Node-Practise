var res = require("./connection.js");


res.query("CREATE DATABASE javatpoint", function (err, result) {  
    if (err) throw err;  
    console.log("Database created");  
    });  


    