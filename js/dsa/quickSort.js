// Ascending order 
const arr = [8, 3, 1, 7, 0, 10, 2];
// 0,1,2,3,7,8,10
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const left = [];
    const right = [];
    const pivot = arr[arr.length - 1];


    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    };

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log('quick sort', quickSort(arr))
