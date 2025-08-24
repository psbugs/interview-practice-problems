
let user = {
    praveen: 27,
    niraj: 29,
    savitri: 55
};

function computeMemoizedUserAge() {
    const cache = new Map();
    return function (key) {
        if (cache.has(key)) {
            let cachedVal = cache.get(key);
            console.log('Getting its value from cache', cachedVal);
            return cachedVal
        }

        const value = user[key];
        cache.set(key, value);
        console.log('getting from original obj', value)
        return value;
    }
};

let memoized = computeMemoizedUserAge();

memoized('praveen')
memoized('praveen')
memoized('praveen')
memoized('praveen')


memoized('savitri')