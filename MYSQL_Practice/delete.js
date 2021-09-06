var res=require("./connection")
var sql = "DELETE FROM employees WHERE city = 'Delhi'";  
res.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Number of records deleted: " + result.affectedRows);  
});  