var arr=[[1,2,7],[3,4,9],[5,6,7,12]]
let sum =0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum=sum+arr[i][j];
        
    }
    console.log(sum);
    sum=0;

}