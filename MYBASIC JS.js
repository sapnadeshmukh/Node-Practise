const promise1=new Promise((resolve,reject)=>{
    var a=13;
    var b=8;
    if (a>b){
        resolve("a is greter")
    }else{
        reject("b is greter")
    }
})
.then((data)=>{
    console.log(data)
})

.then((message)=>{
    console.log(message)
})


// .catch((error)=>{
//     console.log(error)
// })
// .finally((result)=>{
//     result="sapna"
//     console.log(result)
// })
