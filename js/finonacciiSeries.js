function generateFibonacci(n) {
    console.log(n);
    if (!n) return [];
    if (n == 1) return [0]
    let a = 0;
    let b = 1;
    const temp = [a, b];
    for (let i = 0; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        temp.push(c);
    }
    return temp;
}
let result = generateFibonacci(10);
console.log('final result', result);
