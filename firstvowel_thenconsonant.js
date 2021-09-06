const myPromise=new Promise((resolve,reject)=>{
    const vowel_list=["a","e","i","o","u","A","E","I","o","U"]
    var readlinesync = require("readline-sync");
    var count =0;
    var vowel=[];
    var consonant=[];
    var all=[];
    var name = readlinesync.question("enter any string:--");
    for (let i of name){
            if (vowel_list.includes(i)){
                vowel.push(i)
            }
            else{
                consonant.push(i)
            }
        }
        all.push(vowel)
        all.push(consonant)
        var k;
        for (k=0;k<all.length;k++){
            for(j=0;j<all[k].length;j++){
                console.log(all[k][j])
            }
        }
})
myPromise.then((data)=>{
    console.log(data)
})