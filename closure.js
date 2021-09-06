// simple closure example
var n=2;
function  add() {
    console.log(2+n)
    
}
add()


function  outer() {
    var b=10;
    function  inner() {
        var a=20;
        console.log(b+a)
    }
    return inner;
}
var x=outer();
x()
    

// if want to update outer scope variable from inner function
function mycounter(){
    var counter=0;
    function  innerCounter() {
        counter+=1;
        return counter;
    }
    return innerCounter
}
var y=mycounter();
console.log(y())


function  outer() {
    var myName ="shanti";
    function inner(){
        return myName

    }return inner;
    
}var name=outer() ;
console.log(name());
console.log(outer());


function greet(message) {
    console.log(message);
    }
    function greeter(name, age) {
    return name + " says Hey!! He is " + age + " years old";
    }
    var message = greeter("Akhil", 26);
    greet(message);
    
console.log('sapna is my"name"')
    
