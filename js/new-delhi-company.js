// Write down the syntax for closures
// hoisting
// call apply and bind
// difference between an arrow and a regular function 
// react js important concepts
// mongodb 
// What are the steps you will take so that reponse will be sent to the client immediately
// OOPS concepts

const arr = [1, 4, 2, 6, 8, 0, 6, 8];
const { length } = arr;

let argumentVal = 2;
let finalArr = [...new Set(arr.filter((item) => item % 2 == 0).map((item) => item % argumentVal))];

console.log('finalArr', finalArr);

// array of even numbers 
// [2,3,6,8,0]
// [2,4,8]


function returnEvenNumber(num) {
    const finalArr = [];
    for (let i = 0; i < length; i++) {
        let finalComputed = arr[i] * num;
        if (arr.includes(finalComputed)) {
            finalArr.push(finalComputed);
        }
    };
    return finalArr;
};

// let result = returnEvenNumber(4)
// console.log('result',result);