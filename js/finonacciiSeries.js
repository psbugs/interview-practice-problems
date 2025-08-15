

let a = 0;
let b = 1;

console.log(a);
console.log(b)
// 0 1 1 2 3 5 8
// a[i] = a+b;
for (let i = 2; i < 5; i++) {
    let temp = a + b;
    a = b;
    b = temp
    console.log(temp)
}