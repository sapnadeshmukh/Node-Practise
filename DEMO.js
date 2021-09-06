var str="Javatpoint";    
console.log(str.charAt(0));  


// function display()  
// {  
//   console.log(10+20+"30");  
// }  
// display();  

var num=5;
var Num=-4  
console.log(num/0);  
console.log(Num/0);  


function display()  
{  
  console.log(Math.random());  
}  
display();  

// console.log(Boolean(" "))
console.log("0"==[])


var obj = {
  name:  "vivek",
  getName: function(){
  console.log(this.name);
}
      
}
      
var getName = obj.getName;
      
var obj2 = {name:"akshay", getName };
obj2.getName();
