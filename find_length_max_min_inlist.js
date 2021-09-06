var main_list=[[0],[1,3],[5,7],[9,11],[13,15,17],[2,7,8,9,5]]
var i=0;
const result=[]
const all_count=[]
while (i< main_list.length){
    var j=0;
    var count=0;
    while(j<main_list[i].length){
        count=count+1
        list=main_list[i]
        j=j+1
    }
    all_count.push(count)
    result.push(list)

    i=i+1
}


var myObject={}
for(let k=0;k<all_count.length;k++){
    let value=all_count[k]
    myObject[value]=result[k]
}

// console.log(myObject)

var max=0;
var index=0;
while (index<all_count.length){
    if (all_count[index] >max){
        max=all_count[index]
    }
    index++;

}
// console.log(max)
console.log("max_value:--",max,myObject[max])



var index=0;
var max=all_count[index];

while (index<all_count.length){
    if (all_count[index] < max){
        max=all_count[index]
    }
    index++;

}

console.log("min_value",max,myObject[max])

// console.log("1"+2+3)
// console.log(1+"2"+3)
// console.log(1+2+"3")

// let i=0
// for(var i=0;i<5;i++){
//     console.log(i)

// }




