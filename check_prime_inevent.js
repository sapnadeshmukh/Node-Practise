const EventEmitter =require("events")
const event =new EventEmitter()

event.on("checkPrime",(number)=>{
    var result=0;
    for (var i=0;i<=number;i++){
        if(number%i==0){
            result++;


    }
}
    if(result==2){
        console.log("Prime")

    }else{
        console.log("Not Prime")
    }

});
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter any number:--");
event.emit("checkPrime",num);