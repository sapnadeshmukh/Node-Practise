var twoSum = function(nums, target) {
    let i=0;
    let j=1;
    let arr=[];
    for(i in nums){
        if (nums[i]+nums[j]==target){
            console.log(i)
            console.log(j)
            let b=Number(i)
            arr.push(b)
            arr.push(j)
            break;
        }
        
    }
    return arr;

};
let numbers=[3,2,3]


let result=6
console.log(twoSum(numbers,result));