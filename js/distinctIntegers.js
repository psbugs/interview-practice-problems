const arr = [[1, 2, 3], [3, 4, 5], [4, 5, 6]];

function distinctIntegers(arr) {
  const countMap = {};

  for (const subArr of arr) {
    for (const num of subArr) {
      countMap[num] = (countMap[num] || 0) + 1;
    }
  }

  return Object.keys(countMap)
    .filter(key => countMap[key] === 1)
    .map(Number);
}

console.log('final o/p is', distinctIntegers(arr));
