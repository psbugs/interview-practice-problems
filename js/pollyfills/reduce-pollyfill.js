Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0];
    let start = initialValue !== undefined ? 0 : 1;

    for (let i = start; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc;
};