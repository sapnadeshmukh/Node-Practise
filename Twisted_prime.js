function checkPrime(number){
    var result=0;
    var output;
    for (var i=0;i<=number;i++){
        if(number%i==0){
            result++;
        }

    }
    if(result==2){
        output="true"

    }else{
        output="false"

    }
    return output
}
const { boolean } = require("joi");
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter any number:--");
if (checkPrime(num)==="true"){
    var reversedigit=0;
    while(num!=0)  
        {  
        reverse = num%10;  
        reversedigit = reversedigit*10 + reverse;  
        num= parseInt(num/10);  
        }  
    console.log("reverse number is:--",reversedigit)

    var flag = 0;  
    for (var j = 2; j <= reversedigit / 2; j++)  
    {  
        if ((reversedigit % j) == 0)  
        {  
            flag = 1;  
            break;  
        }  
    }  
    if (flag == 0) { 
        console.log("Twisted Prime");
    }
    else {
        console.log("Not Twisted Prime");  

    }  
}else{
    console.log("you have entered not prime number")
}

// Examples: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79