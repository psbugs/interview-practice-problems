let nums = [1, 2, 3, 45, 6, 7, 8, 9];
let n = nums.length;
let elementToRemove = 6;
let temp1 = [];

for (let i = 0; i < n; i++) {
    console.log(nums[i]);
    if (nums[i] !== elementToRemove) {
        temp1.push(nums[i])
    }
}
console.log(temp1);

// const arr = [1, 2, 3, 4, 2, 5, 2, 6];
// const elementsToRemove = [2, 5];

// let temp = []
// for(let item of arr){
//     if(!elementsToRemove.includes(item)){
//         temp.push(item);
//     }
// };

// console.log('distinct container',temp);