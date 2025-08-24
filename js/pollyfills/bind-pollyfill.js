let user = {
    fName: 'Praveen',
    lName: 'Sunhare'
};

function getFullName(age) {
    return `${this.fName}-${this.lName} with age ${age}`;
};

Function.prototype.customBind = function (context, ...args1) {
    let fn = this;
    return function (...args2) {
        return fn.apply(context, [...args1, ...args2])
    }
};

let response = getFullName.customBind(user, 27);
console.log(response());