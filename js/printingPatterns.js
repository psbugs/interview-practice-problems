let n = 10;
let str = ''
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {
        str += '*';
    }
    console.log('\n');
}
console.log('str', str);




const n1 = 10;

for (let i = 1; i < n1; i++) {
    let space = ' '.repeat(n1 - i);
    let starts = '*'.repeat(2 * i - 1);
    console.log(space + starts + space);
}