let nums = [1, 2, 3, 4, 5];
function sum(n) {
    if (n == 0) return nums[n];
    return nums[n] + sum(n - 1);
}
let { length } = nums;
let sumRes = sum(length - 1);
console.log('sumRes', sumRes);