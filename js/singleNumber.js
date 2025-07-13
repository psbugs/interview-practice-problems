function singleNumber(nums) {
 let result = 0;
 for (let i = 0; i < nums.length; i++) {
 result ^= nums[i];
 }
 return result;
}

let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));