var numbers = [50, 40, 23, 70,200,123, 56, 12, 5,500, 10, 7] ;
i=0
maxNum=0;
sMax=0;
while(i<numbers.length){
    if(numbers[i]>maxNum){
        maxNum=numbers[i]
    }
    i++;
    j=0;
    while(j<numbers.length){
        if(maxNum>numbers[j] && sMax<numbers[j]){
            sMax=numbers[j]
        }j++;
    }
}
console.log(maxNum)
console.log(sMax)


