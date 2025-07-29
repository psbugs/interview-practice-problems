let string = "1331";

function checkPalindrome() {
    let n = string.length;
    let j = n - 1;
    let outStr = '';
    for (let i = 0; i < n; i++) {
        outStr = outStr + string[j]
        j--;
    }
    return outStr
};

let result = checkPalindrome();