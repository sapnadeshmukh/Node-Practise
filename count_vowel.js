const myPromise=new Promise((resolve,reject)=>{
    const vowel_list=["a","e","i","o","u","A","E","I","o","U"]
    var readlinesync = require("readline-sync");
    var count =0;
    var name = readlinesync.question("enter you name:--");
    for (let i of name.toLowerCase()){
            if (vowel_list.includes(i)){
                count++;
        
            }
        }
        console.log(count)
    



})
myPromise.then((data)=>{
    console.log(data)
})








