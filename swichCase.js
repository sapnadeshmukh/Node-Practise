const readlinesync=require("readline-sync")

const age=parseInt(readlinesync.question("enter age:--"))

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}         


