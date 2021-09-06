console.log("************************file s ysytem***************************") 

const fs=require("fs")

// To write in file synchronous

const students=["sapna","21",24,"frd"]
const data=students.toString() //sapna,21,24,frd
const newdata=JSON.stringify(students) //["sapna","21",24,"frd"]
fs.writeFileSync("write.txt",newdata) 
console.log("data has written successfully")



// To write in file Asynchronous

const students=["sapna","21",24,"frd"]
const data=students.toString() //sapna,21,24,frd
const data1=JSON.stringify(students) //["sapna","21",24,"frd"]
fs.writeFile("write.txt",data1,()=>{
    console.log("sucessfully!!")
}) 


// To read file Synchronous

const result=fs.readFileSync("write.txt","utf8");
console.log(result)




// To read file Asynchronous

const result1=fs.readFile("write.txt","utf8",(err,result1)=>{
    console.log("Async read data")
})
console.log("****************")




//  To append in file Asynchronous

fs.appendFile("write.txt","Hello Content!",function(err) {
    if (err) throw err;
        console.log("Saved");
    });



//  To append in file Synchronous

fs.appendFileSync("write.txt","hey baby!!");
        console.log(" again Saved");

    


// To Rename file asynchronous

fs.rename('write.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});  

// To Rename file synchronous
fs.renameSync('myrenamedfile.txt','latestfile.txt')






// To Delete file asynchronous

fs.unlink('latestfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 


// To Delete file synchronous
fs.unlinkSync("latestfile.txt")
console.log("My file has deleted!!")

// To Update file Asynchronous
fs.appendFile('latestfile.txt', ' Nagpur!!', function (err) {
    if (err) throw err;
    console.log('Updated!');
  }); 


fs.writeFile('latestfile.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });


// To update file synchronous
fs.writeFileSync('latestfile.txt', 'Lovely family!!!!')


