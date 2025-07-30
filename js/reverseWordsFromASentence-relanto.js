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