function reverseInteger(number) {
    let rev = 0;
    while (number > 0) {
        let rem = number % 10;
        number = Math.floor(number / 10);
        rev = rev * 10 + rem
    }
    return rev
};

let result = reverseInteger(156789);

console.log('result', result)