// fill
// syntax fill("fillingitem",start,end)
// start is inclusive
// end is exclusive

// var arr=[]
// arr.fill("s")
// console.log(arr)


// filter
var arr=[20,4,3,5,6,"r",7,8]
// let add=arr.filter(x=>x)

let add=arr.filter((x)=> x%2==0 &&x%5==0)  // [ 20 ]
// let add=arr.filter((x,y)=> x%2==0 &&y%5==0) // [ 20 ]
console.log(add)


// map
// if give condition give boolean value in array
// var arr=[3,4,7,9]
// let arr2=arr.map((item)=>item**2)
// console.log(arr2)
// o/p [ 9, 16, 49, 81 ]



// var arr=[2,5,7,9,12]
// var arr2=arr.reduce((first,second) =>{
//     return first+second;

// })
// console.log(arr2)
// o/p=0







