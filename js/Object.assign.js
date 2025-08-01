function customAssign(target, ...sources) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    const finalObj = Object(target);

    sources.forEach(source => {
        if (source == null) {
            return;
        }
        for (const [key, value] of Object.entries(source)) {
            finalObj[key] = value;
        }
    });

    return finalObj;
}

console.log(customAssign({ a: 1 }, { b: 2 }, null));

try {
    console.log(customAssign(null, { b: 2 }));
} catch (e) {
    console.error('Error:', e.message);
}

module.exports = customAssign;
