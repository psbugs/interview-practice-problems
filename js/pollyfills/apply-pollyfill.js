let user = {
    fName: 'Praveen',
    lName: 'Sunhare'
};

function getFullName(age) {
    return `${this.fName}-${this.lName} with age ${age}`;
};


Function.prototype.myApply = function (ctx, args) {
    return this.myCall(ctx, ...(args || []));
};

Function.prototype.myCall = function (ctx, ...args) {
    ctx = ctx == null ? globalThis : Object(ctx);
    const fn = Symbol('fn');
    ctx[fn] = this;
    const out = ctx[fn](...args);
    delete ctx[fn];
    return out;
};

console.log(getFullName.apply(user, [27]));
console.log(getFullName.myApply(user, [27]));