var numbers = [1,4,2,4,7,3,5,2,7];
const arr=[];
var i=0
var j=0
for (i=0;i<numbers.length;i++){
    for(j=i+1;j<numbers.length;j++){
        if (numbers[i]==numbers[j]){
            arr.push(numbers[i])

        }


    }

}
console.log(arr)


