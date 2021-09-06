var n=require("readline-sync");
const num=n.question("enter number: ");
let i=2
var count=0;
while (i<num) {
       if (num%i===0) {
       count=count+1
       }
       i++;
}
if (count===0) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}


// let c=require("readline-sync");
let loop_time=n.question("enter loop time: ");
var maxi=0;
let lis=[ ]
for (let i=1;i<=loop_time;i++) {
  let num=n.question("enter number: ")
  lis.push(num)
}
var maxi=lis[0];
for (let j=0;j<lis.length;j++) {
  if (maxi<lis[j]) {
      [maxi=lis[j]]
  }
}
console.log(maxi)


const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
for(let pro in campus){
 console.log(pro)
}

for(let pro of campus){
  console.log(Object.keys(campus).length)
 }
 

