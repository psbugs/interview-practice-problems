const nums = [1,2,90,10,110];

let maxDiff = 0;

let min =nums[0];

for(let i=1;i<nums.length;i++){
    const diff = nums[i]- min;
    console.log('diff',diff)
    maxDiff = Math.max(maxDiff,diff);
    min = Math.min(min,nums[i]);
};

console.log(maxDiff);