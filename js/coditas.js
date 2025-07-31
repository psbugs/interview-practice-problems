// xcv*** -> “”
// xass**dsd*ff -> xadsff
// asd**f*gh -> agh 
// *****  -> “”
// aa**a**** -> “”    
// Question : Remove * along with previous non star alphabets from string and return the remaining string

let inputString = 'asd**f*gh';

let stack = [];

for (let item of inputString) {
    if (item == '*') {
        stack.pop();
    } else {
        stack.push(item)
    }
}
console.log('stack', stack.join(''))
















// console.log(userName);  //undefined
// var userName = "Alice";

// function showDetails() {
//     console.log(greet());
//     function greet() {
//         return "Hello, namaste";
//     }
//     var farewell = function () {
//         return "Its time say goodbye";
//     };
//     console.log(farewell());
// }
// showDetails(); // Hello namaste // Its.....
// console.log(country); //undefined
// var country = "INDIA";