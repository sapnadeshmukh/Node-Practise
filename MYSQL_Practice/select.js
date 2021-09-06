var res=require("./connection")

res.query("SELECT * FROM employees WHERE id = '2'", function (err, result) {  
    if (err) throw err;  
    console.log(result);  
    });  