let array = [1,2,3,4,5,6];
// array needs to be sorted then only binary search will applicable
let itemToSearch = 10; //return its index from an array  index=4

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found
}

console.log('response from binary search be',binarySearch(array,itemToSearch));