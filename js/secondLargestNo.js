function secondLargest(arr) {
    let { length } = arr;
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    };
    return secondLargest;
}
let arr = [4, 9, 0, 2, 8, 7, 1];
let result = secondLargest(arr);
console.log('second largest no', result);