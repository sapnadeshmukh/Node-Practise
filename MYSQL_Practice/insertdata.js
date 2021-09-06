var res = require("./connection.js");

// Insert single Record


// var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')";  
// res.query(sql, function (err, result) {  
// if (err) throw err;  
// console.log("1 record inserted"); 
// } )                                                                                                                                                                                                                                                                                                                                                              

// Insert Multiple Records
var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";  
var values = [  
['2', 'Bharat Kumar', '25', 'Mumbai'],  
['3', 'John Cena', '35', "Las Vegas"],  
['4', 'Ryan Cook', '15', "CA"] ,
['5','sapna','23',"student"] 
];  
res.query(sql, [values], function (err, result) {  
if (err) throw err;  
console.log("Number of records inserted: " + result.affectedRows);  
});  
 