var mysql = require('mysql');  
var connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "Sapna@2104" , 
  database:"javatpoint"
});  
connection.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  



module.exports=connection