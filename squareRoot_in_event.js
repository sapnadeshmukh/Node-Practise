const EventEmitter =require("events")
const event =new EventEmitter()

event.on("findsquareRoot",(number)=>{

    const result = Math.sqrt(number);
    console.log(`The square root of ${number} is ${result}`);

});
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter any number:--");
event.emit("findsquareRoot",num);