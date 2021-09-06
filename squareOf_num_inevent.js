const EventEmitter =require("events")
const event =new EventEmitter()

event.on("findSquare",(number)=>{
    console.log(number*number)

});
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter any number:--");
event.emit("findSquare",num);