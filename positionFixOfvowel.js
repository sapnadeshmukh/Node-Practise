const readlinesync=require("readline-sync")
const word=readlinesync.question("enter any word:--")
var str="";
const vowellist=["a","i","e","o","u"]
for(let i=0;i<word.length;i++){
    if(word[i] in vowellist){
        str =str+i

    }else{
        str = str+(word[i])
    }
    
}
console.log(str)
