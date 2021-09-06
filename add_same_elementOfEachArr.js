var list1=[[1,2,5,3,5],[4,9,5,4,3],[5,4,2,5,1,8]]
var five=5;
var sum=0
var main=[]
for(let i=0;i<list1.length;i++){
    for(let j=0;j<list1[i].length;j++){
        if(five == list1[i][j]){
            // main.push(list1[i][j])
            sum=sum+list1[i][j]

        }

    }
}
// console.log(main)
console.log(sum)