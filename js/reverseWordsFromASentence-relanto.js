// Reverse the words of a string
function reverseWordsFromString(str) {
    let outStr = '';
    const strArr = str.split(' ');
    const { length } = strArr;

    for (let i = length - 1; i >= 0; i--) {
        let item = strArr[i];
        outStr = outStr === '' ? item : outStr + ' x' + item;
    }

    return outStr;
};

const input = "I love JavaScript";
const response = reverseWordsFromString(input);

console.log(response); // Output: JavaScript love I

// Relanto l1 interview experience

// concentrates on var let and const

// asked me to write and explain detailed concept at system level design

// at very basics system level they majorly focused

// where does they used in a scope

// how variable works in javascript

// lifecycle method of variable

// creation ,allocation , execution

// given one challenge

// I love Javascript
// Javascript love is



