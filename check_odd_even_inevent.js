const EventEmitter =require("events")
const event =new EventEmitter()

event.on("checkOddEven",(number)=>{
    if(number%2==0){
        console.log("Even Number")
    }
    else{
        console.log("Odd Number")
    }
});
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter any number:--");
event.emit("checkOddEven",num);