function sumDigit(number){
    var lastDigit=0;
    var sumOfAllDigits=0;
    while(number!=0){
        lastDigit= number % 10;
        sumOfAllDigits = sumOfAllDigits + lastDigit;
        number = parseInt(number/10);
        }
        let result=("Sum of all digits : ", sumOfAllDigits);
        return result
}   
var readlinesync = require("readline-sync");
var num = readlinesync.question("Enter any number:---- ");
console.log(sumDigit(num));
