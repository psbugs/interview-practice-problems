let str = 'aaaabbbbcreff';
let obj = {};

for (let item of str) {
    obj[item] = (obj[item] || 0) + 1;
};
console.log('obj', obj);

let s = '';

for (let [key, value] of Object.entries(obj)) {
    s = s + key + value;
};

console.log('s', s);
// a4b4c1r1e1f2
// output