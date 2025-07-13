const nums =[100,1000,88,67,9,10];
let min = nums[0];

for(let i=1;i<nums.length;i++){
    if(nums[i] < min){
        min = nums[i];
    }
};

console.log(min)