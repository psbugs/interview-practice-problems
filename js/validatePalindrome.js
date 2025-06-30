function validatePalindrome(str) {
    if (str.trim() === "") return true;

    const filteredStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = filteredStr.split('').reverse().join('');

    return filteredStr === reversedStr;
}

console.log(validatePalindrome('nayana'))