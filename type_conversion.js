var a=2
b=String(null)
console.log(b)
console.log(typeof(b))


var k="2s"
j=Number(k)
console.log(j)

console.log(Boolean(function(){}))
// false with 0,null,"",NaN,undefined
// true {},[],Symbol,function(){},1
console.log(undefined==null) // true
console.log(undefined===null) // true

var s="foo"+ +1    
console.log(s)