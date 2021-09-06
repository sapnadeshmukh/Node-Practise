const fetch =require('node-fetch');
function run(){
    console.log("I am running")
    fetch("https://finalspaceapi.com/api/v0/character")
    .then(res=>res.json())
    .then(data=>console.log(data[0]));
    console.log("Second request")

}
run();


const fetch =require('node-fetch');
async function run(){
    console.log("I am running")
    const response=await fetch("https://finalspaceapi.com/api/v0/character")
    const json=await response.json();
    console.log("json",json[0])
   
    console.log("Second request")

}
run();



const fetch =require('node-fetch');
async function run(){
    console.log("I am running")
    let data;
    try{
    const response=await fetch("https://finalspaceapi.com/api/v0/characters")
    const json=await response.json();
    data=json;
    // console.log("json",json[0])
    }catch(e){
        console.log(e.message);

    }
    if(data){
        console.log(data[0])
    }
    console.log("Second request")

}
run();



function getData(){
    return "Received data"
}
console.log(getData())
// o/p:--Received data


async function getData(){
    return "Received data"
}
console.log(getData())
// o/p:--Promise { 'Received data' }



function  clown() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("hello")
        },3000)

    })
    
}

async function msg(){
    const msg=await clown()
    console.log("Message:",msg)
}
msg()