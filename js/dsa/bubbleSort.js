let nums = [1,2,3,1,2,4];

// [1,1,2,2,3,4];

let n = nums.length;
for(i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
        if(nums[j] > nums[j+1]){
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
    }
}
console.log('nums',nums);