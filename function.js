// 1. named function
    function addNumbers(parameter1, parameter2) {
        console.log(parameter1+parameter2)
    }
    addNumbers(3 , 5);
    addNumbers(3 , 6);





// 2. Function /regular Expressions ( Anonymous function )
 var getSum = function(num1, num2) {
    var total = num1 + num2;
    return total;
   };
console.log(getSum(5,5))
console.log(getSum(5,2))

   

// 3.Self-Invoking Functions ( Immediately invoked function expression)


(function(){
    console.log("sapna")
 }());
 

(function () {
    var x = "Hello!! Nayak";  
    console.log(x);
}());
   

// 4.arrow function

var a=(b,c)=>{
    return b+c
}
console.log(a(5,4))
console.log(a(5,1))



// 5.generator function
function* sum(a,b){
    return(5+8,a,b)
};
var s=sum(7,9);
console.log(s.next());

function* generatorFunction() {
    yield "This is the first return"
    console.log("First log!")
    yield "This is the second return"
    console.log("Second log!")
    return "Done!"
}
var b=generatorFunction();
console.log(b.next())


function* foo(index) {
    while (index <=5) {
      yield index;
      index++;
    }
  }
  
  const iterator = foo(0);
  
  console.log(iterator.next().value);
  // expected output: 0
  
  console.log(iterator.next());
  // expected output: 1
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());



  console.log("this is tutorial 53");
// Generators in JavaScript
// 1 - 1B

function* numbersGen(){
    let i = 1;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(i<3){
        yield i++;
        // yield (i++).toString();
    }
}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);

const a ="hello"
const b=a










   
