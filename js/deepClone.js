function deepClone(originalObj) {

    if(originalObj !== "object" || originalObj == null)  return originalObj
    let outObj = {};

    for (let key in originalObj) {
        outObj[key] = deepClone(originalObj[key]);
    };

    return outObj;
};

console.log(deepClone({ a: { b: { c: 3 } } }));

module.exports = deepClone;