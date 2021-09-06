// create event to be fired only one time using once

const EventEmitter =require("events")
const event =new EventEmitter()

event.on("sayMyName",()=>{
    console.log("My name is sapna!!!!!!")
});


event.emit("sayMyName");







// create event emitter instance and register a couple of callback

const EventEmitter =require("events")
const event =new EventEmitter()

event.on("sayMyName",()=>{
    console.log("My name is sapna!!!!!!")
});



event.on("sayMyName",()=>{
    console.log("My father name is vilas!!!!!!")
});
event.on("sayMyName",()=>{
    console.log("My surname is Deshmukh!!!!!!")
});

event.emit("sayMyName");



// registering for event with callback parameters
const EventEmitter =require("events")
const event =new EventEmitter()

event.on("checkPage",(score,msg)=>{
    console.log(`status code is ${score} and the page is ${msg}`)
});

event.emit("checkPage",200,"success!!");









