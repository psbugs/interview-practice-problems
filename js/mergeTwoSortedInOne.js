const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

function mergeTwoSortedInOne(arr1, arr2) {

    let i = 0;
    let j = 0;
    let finalTemp = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            finalTemp.push(arr1[i++])
        } else {
            finalTemp.push(arr2[j++])
        }
    };
    return [...finalTemp, ...arr1.slice(i), ...arr2.slice(j)]
}

let response = mergeTwoSortedInOne(arr1, arr2)
console.log(response)