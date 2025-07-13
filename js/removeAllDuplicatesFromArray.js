const nums = [4,3,2,7,8,2,3,1];
let length = nums.length;
let temp =[];
for(let i=0;i<length;i++){
    for(let j=i+1;j<length;j++){
        if(nums[i] == nums[j]){
            temp.push(nums[i])
        }    
    }
}
console.log('duplicates elements are',temp);