function one(){
    console.log("hello")


}
function two(){
    setTimeout(one,2000)
    console.log("hii")
}
two()



function myAll(value){
    return new Promise((resolve,reject)=>{
        if(value===true){
            resolve("success")
        }else{
            reject("Failure")
        }
    })
}
myAll(false).then((data)=>{
    console.log("data",data)
}).catch((error)=>{
    console.log("error",error)
})

const fetch=require("node-fetch")
function myAll(value){
    return new Promise((resolve,reject)=>{
        fetch("https://finalspaceapi.com/api/v0/charactersss").then((data)=>{
        if (data.status===200){
            
            resolve(data);
        }else{
            reject(data);
        }
        })
        
        
    })
}
myAll(false).then((data)=>{
    console.log("data",data)
}).catch((error)=>{
    console.log("error",error.statusText)
})

var sword="⚔" 
console.log(sword)

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
        
obj.getName();


function doSomething() {
    console.log(this);
  }
          
doSomething();


var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
        
}
        
var getName = obj.getName;
        
var obj2 = {name:"akshay", getName };
obj2.getName();


function add (a) {
    return function(b){
      return a + b;
    }
  }
  
console.log(add(3)(4))
  

