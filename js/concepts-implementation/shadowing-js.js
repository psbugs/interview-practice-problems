
var a = 10; // it is inside global
let b = 20; // it is present inside script not in a block 

{
    var a = 1;
    let b = 2;  //block
    const c = 3;  // block

    console.log('inside block scope')
    console.log('a', a)
    console.log('b', b)
    console.log('c', c);
};


console.log('outside global scope')
console.log('a', a);

console.log('b', b);