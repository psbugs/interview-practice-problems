const nums = [1,2,2,2,2,2,2,3,4,5,6,7,8,8,8,8,8];
let {length} = nums;
let finalNums = [];
let count = 0;
for(let i=1;i<length;i++){
    if(nums[i] == nums[i-1] && !finalNums.includes(nums[i])){
        finalNums.push(nums[i]);
    };
};
console.log(finalNums);