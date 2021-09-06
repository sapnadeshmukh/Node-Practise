// input=2745
// successors of even numb is 3 and 5 bcoz 2 and 4 is even
// output 3*5=15

function sumDigit(number){
    var lastDigit=0;
    var sumOfAllDigits=1;
    var data=0;
    while(number!=0){
        lastDigit= number % 10;
        if(lastDigit%2==0){
            data=lastDigit+1
            sumOfAllDigits=sumOfAllDigits*data


        }
        number = parseInt(number/10);
        }
        let result=(sumOfAllDigits);
        return result
}   
var readlinesync = require("readline-sync");
var num = readlinesync.question("Enter any number:---- ");
console.log(sumDigit(num));
