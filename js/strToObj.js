function setNestedObj(str, value) {
    let result = {};
    let current = result;
    let splittedStr = str.split('.');
    let n = splittedStr.length;
    for (let i = 0; i < n; i++) {
        let key = splittedStr[i];
        if (i == n - 1) {
            current[key] = value;
        } else {
            current[key] = {};
            current = current[key];
        }
    }
    return result;
};


console.log(JSON.parse(JSON.stringify(setNestedObj("a.b.c", "test"))));