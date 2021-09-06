var numbers = [50, 40, 23, 70,200,123, 56, 12, 5,500, 10, 7] ;

i=0;
maxnum=numbers[0];
smax=numbers[0];

while (i<numbers.length){
    if (numbers[i]< maxnum){
        maxnum=numbers[i]
    }
    i++;
    j=0
    while(j<numbers.length){
        if (maxnum<numbers[j] && smax>numbers[j]){
            smax=numbers[j]
        }j++;

    }

}console.log(maxnum)
console.log(smax)