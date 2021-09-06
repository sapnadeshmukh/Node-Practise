// input [1, 1, 2, 3, 3,4, 4, 5, 1]
// output  [[2, 1], 2, 3, [2, 4], 5, 1


var mainlist=[1, 1, 2, 3, 4, 4, 5, 1]

let count=1;
let newArry=[]
let abc=[];
for (var i=0;i<mainlist.length;i++){
        if(mainlist[i]==(mainlist[i+1])){
            count++;
            abc.push(count,mainlist[i])
            count=1;
        
            newArry.push(abc)
            abc=[]
            mainlist.splice(i, 1); 

        }
        else{
            newArry.push(mainlist[i])
        }
}

console.log(newArry)





