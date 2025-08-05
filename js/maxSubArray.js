function maxSubArray(nums) {
    // write your code  here
    if (nums.length == 1) return nums[0];
    if (nums.length == 0) return -Infinity
    const { length } = nums;
    let maxSoFar = nums[0];
    let currentMax = nums[0];
    for (let i = 1; i < length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

module.exports = maxSubArray;
