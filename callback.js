
console.log("****************************")

function first(name,callback){
    setTimeout(()=>{
        console.log("2"),2000})
        console.log("sapna")
        callback()
        second()
    
}
function second() {
    console.log("3")
    
}
function  third() {
    console.log("1")
    
}
first("1",third)


console.log("**************")


function  name(nam) {
    console.log(nam +" "+surname())
    
}
setTimeout(()=>{
        console.log("vilas"),2000})
        
    

function surname() {
    var s=("deshmukh")
    return s
    
}
name("sapna")


function func(name,callback){
    setTimeout(()=>{callback(),30000})
    console.log(name)
    


}
function sy(){
    console.log("I am callback")
}
func("sapna",sy);
console.log("*************")


function f1 (name,callback) {
    console.log("hii" + name)
    callback()
    
}
function  f2() {
    console.log ("hello")
    
}
f1("sapna",f2)



function addition(x, y , callback){
    setTimeout(() => {
    console.log(`The sum of ${x} and ${y} is ${x+y}.`); 
    callback(); 
     }, 5000); } 
function display(){ 
    console.log('Numbers added!'); 
     } 
addition(5,5,display);


