function callAgain(num){
    console.log(num)
    const num1=num-1
    if (num1>0){
        callAgain(num1)
    }

}
callAgain(4);


console.log("*******")

var arrowAdd = (a,b) => a + b;
console.log(arrowAdd(2,3))

function f(){
    console.log("hello")
    f();
}
f();


function add(number) {
    if (number <= 0) {
      return 0;
    } else {
      return number + add(number - 1);
    }
  }
  
console.log(add(3) )


