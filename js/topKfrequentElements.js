
function topKfrequentElements(n, k) {
    let map = new Map();

    n.forEach((item) => map.set(item, ((map.get(item) || 0) + 1)))

    let result = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([num]) => num)
    console.log(result)
}

let k = 2;
let nums = [2, 2, 1, 1, 1, 3, 4, 5]
let response = topKfrequentElements(nums, k)