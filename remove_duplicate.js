var numbers = [1,4,2,4,7,3,5,2,7];
i=0
const arr=[];
for (i;i<numbers.length;i++){
    if(!(arr.includes(numbers[i]))){
        arr.push(numbers[i])

        

    }
}
console.log(arr)