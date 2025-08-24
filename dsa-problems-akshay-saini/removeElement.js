

const nums = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
const value = 4;
let count = 0
for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== value) {
        nums[count] = nums[i];
        count = count + 1;
    }
}
console.log(nums)