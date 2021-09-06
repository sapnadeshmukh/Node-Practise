var res = require("./connection.js");
var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
res.query(sql, function (err, result) {  
    if (err) throw err;  
    console.log("Table created");  
});  