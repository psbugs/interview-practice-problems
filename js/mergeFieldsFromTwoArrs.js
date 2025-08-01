function mergeArrays(arr1, arr2) {
    const map = new Map();
    // Insert all items from arr1
    arr1.forEach(item => {
        map.set(item.id, { ...item });
    });

    // Insert/merge items from arr2
    arr2.forEach(item => {
        if (map.has(item.id)) {
            map.set(itcem.id, { ...map.get(item.id), ...item });
        } else {
            map.set(item.id, { ...item });
        }
    });

    return Array.from(map.values());
}

// Example debug
const a = [{ id: 1, name: 'Praveen' }, { id: 2, name: 'Niroj' }];
const b = [{ id: 1, age: 21 }, { id: 3, name: 'Roshni' }];

console.log(mergeArrays(a, b));

