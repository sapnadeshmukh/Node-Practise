let n=require("readline-sync");
let choose_ascii=(n.question("enter number: "));
var ascii_char=95+choose_ascii
for (var i=95;i<=ascii_char;i++) {
       console.log(chr(i),end="")
}

const arr=[1,2,3]
const a=[...arr,6,7]
console.log(a)