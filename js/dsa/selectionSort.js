const nums = [5, 6, 2, 13, 23, 1, 29, 0];

const { length } = nums
for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
        if (nums[i] < nums[j]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp
        }
    }
}
console.log('Selection sort ascending order be', nums)