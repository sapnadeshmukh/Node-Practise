let arr=[1,2,3,1,4,3,2];
let newArr=[]
let presentElement=[]

for (let i=0;i<arr.length;i++){
    if (!(newArr.includes(arr[i]))){
        newArr.push(arr[i])
    }else{

        presentElement.push(arr[i])
    }

}
console.log(newArr)
console.log(presentElement)