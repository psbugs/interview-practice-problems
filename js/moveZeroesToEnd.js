function moveZeroesToEnd(nums) {
    let { length } = nums;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }
    for (let j = count; j < length; j++) {
        nums[j] = 0
    }
    return nums

}

const nums = [1, 2, 3, 4, 0, 76, 0, 1, 1, 1, 8, 7]
let result = moveZeroesToEnd(nums)
console.log('response', result)