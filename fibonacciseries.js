const readlinesync=require("readline-sync")
const number = parseInt(readlinesync.question('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

console.log(typeof 2n) // Returns bigint
console.log("undefined"==undefined)