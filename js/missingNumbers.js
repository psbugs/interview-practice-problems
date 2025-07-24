let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 15, 18];

let n = nums.length;

let last = nums[nums.length - 1];

let temp = [];

for (let i = 0; i < last; i++) {
  if (!nums.includes(i + 1)) {
    temp.push(i + 1);
  }
}

console.log(temp);