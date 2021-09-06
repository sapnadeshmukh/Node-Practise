function checkHappy(number){
    var list=(number.split(''))
    console.log(list)
    var i=0
    var sum=0
    var result=false;
    while(i<list.length){
        var sqr=list[i]*list[i]
        // console.log(sqr)
        sum=sum+sqr
        i=i+1
    
    }
    console.log(sum)
    
    if (sum==1){
        result=true
    }
    else{
        number=sum
    }
    return result
}
    checkHappy(num)

const { number } = require("joi");
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter you number:--");
console.log(checkHappy(num))
