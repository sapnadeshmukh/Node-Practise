const myPromise=new Promise((resolve,reject)=>{
    var myObject={
        "name":"sapna",
        "age":21,
        "city":"Nagpur"
    }
    
    myObject["name"]="Apsara"
    resolve (myObject)
})
myPromise.then((data)=>{
    console.log(data)
})
