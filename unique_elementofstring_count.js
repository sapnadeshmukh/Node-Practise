const myPromise=new Promise((resolve,reject)=>{
    var readlinesync = require("readline-sync");
    var string=readlinesync.question("enter your name:--")
    var newarray=[]
    var count=0;
    for (var i=0;i<string.length;i++){
        if(!(newarray.includes(string[i]))){
            newarray.push(string[i])
            count++;
        }
    }
    
    resolve(count)

})

myPromise.then((result)=>{
    console.log(result)
})

