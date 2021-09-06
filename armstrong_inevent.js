const EventEmitter =require("events")
const event =new EventEmitter()

event.on("checkArmstrong",(number)=>{


    let sum = 0;

    let temp = number;
    const numberOfDigits = number.length;
    while (temp > 0) {
    // finding the one's digit
        let remainder = temp % 10;

        sum += remainder **numberOfDigits;

    // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
    }
        

});
var readlinesync = require("readline-sync");
var num = readlinesync.question("enter any number:--");
event.emit("checkArmstrong",num);