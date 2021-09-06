const readlinesync=require("readline-sync")
const number=parseInt(readlinesync.question("enter a number:--"))
console.log(number)
var result=0;
for (var i=0;i<=number;i++){
    if(number%i==0){
        result++;
    }

}if (result==2){
    console.log("Prime")
}else {
    for (var newNum = number + 1; newNum < Number.MAX_VALUE; newNum++) {
        isPrime = true;
        for (var j = 2; j <= newNum / 2; j++) {
            if (newNum % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("Next prime number = " + newNum);
            break;
        }
    }
}
