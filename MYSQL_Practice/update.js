var res=require("./connection")
var sql = "UPDATE employees SET city = 'Delhi' WHERE city = 'Allahabad'";  
res.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result.affectedRows + " record(s) updated");  
});  