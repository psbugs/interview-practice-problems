const nums =[100,1000,88,67,9,10];
let max = nums[0];

for(let i=1;i<nums.length;i++){
    if(nums[i] > max){
        max = nums[i];
    }
};

console.log(max)