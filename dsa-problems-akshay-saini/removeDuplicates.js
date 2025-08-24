

function removeDuplicates(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    };
    return x + 1;
};

console.log(removeDuplicates([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));

// Remember this 2 conditions while you work for sorting ascending/descending order
// ---------> a[i+1] > a[i]

// <---------- a[i+1] < a[i]