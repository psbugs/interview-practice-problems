const nums = [2, 7, 11, 15];
const target = 9;
// nums[i]   t   i   complement
//    2         9   0    7
//    {'2' : 0 ,}

//    7   9   1  2

// 0 , 1
function computeTwoSum(n, t) {
    const map = new Map();
    for (let i = 0; i < n.length; i++) {
        const complement = t - nums[i]; // 
        console.log(complement)
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return [];
};

console.log('response from compute sum', computeTwoSum(nums, target));