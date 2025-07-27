let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];


let nums = [...a, ...b];

let { length } = nums;
for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
        if (nums[i] < nums[j]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp
        }
    }
};
console.log('sorted nums', [...new Set(nums)]);
