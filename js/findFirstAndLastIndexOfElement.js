const inputArr = [0, 1, 3, 0, 1, 2, 0, 1, 0, 1, 2, 1, 0, 1];

if (inputArr.length == 0) console.log('Input is empty provide a valid input arr');

const n = inputArr.length;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (inputArr[i] < inputArr[j]) {
            let temp = inputArr[i];
            inputArr[i] = inputArr[j];
            inputArr[j] = temp;
        }
    }
};

console.log('sorted arr', inputArr);

let x = 2;
let container = [];
for (let i = 0; i < n; i++) {
    if (inputArr[i] == x) {
        container.push(i);
    }
}
let startingIndex = Math.min(...container);
let endingIndex = Math.max(...container);
console.log(container, startingIndex, endingIndex);

