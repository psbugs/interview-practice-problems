function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key); 
        }

        const result = fn(...args);
        cache.set(key, result);   
        return result;
    };

}

memoize();


let obj = {
    BMW: 121,
    Cupra: 131
};

function computeMemoized() {
    const cache = new Map(); // closure-level persistent cache

    return function (key) {
        if (cache.has(key)) {
            console.log('From cache:', cache.get(key));
            return cache.get(key);
        }

        const value = obj[key];
        console.log('Fetched from original obj:', value);
        cache.set(key, value); // store in cache
        return value;
    };
}

// Memoized function with persistent cache
const memoized = computeMemoized();

memoized('BMW');     // Fetched from original obj: 121
memoized('BMW');     // From cache: 121
memoized('Cupra');   // Fetched from original obj: 131
