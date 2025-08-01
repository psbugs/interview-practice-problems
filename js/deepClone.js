function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj; // return primitives as-is
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle objects
    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

// Debugging
// console.log(deepClone({ a: { b: { c: 3 } } }));
console.log(deepClone([{ a: { b: { c: 3 } } }, { x: 10, y: [1, 2, 3] }]));

module.exports = deepClone;
// Handles both array and object while cloning the obj