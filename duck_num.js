// without event
var readlinesync = require("readline-sync");
var number = readlinesync.question("enter you number:--");
var count=0;
var rem;

while(number >0){
    rem=number%10;
    if(rem==0){
        count++;
    
        
    }
    number=number/10;
}
if(count>0){
    console.log("It is a duck number");
}
else{ 
    console.log("It is not a duck number")
}










// with Event
const EventEmitter =require("events")
const event =new EventEmitter()

event.on("checkDuckNum",(number)=>{
    var count=0;
    var rem;

    while(number > 0){
        rem=number%10;
        if(rem==0){
            count++;
        }
        number=number/10;
    }
    if(count>0){
            console.log("It is a duck number");
        }
    else{ 
        console.log("It is not a duck number")
}
    
});
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter any number:--");
event.emit("checkDuckNum",num);