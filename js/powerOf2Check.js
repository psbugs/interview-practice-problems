// 1,2,4,8,16,32 


function isNumberPowerOfTwo(number) {
    if (number <= 0) {
        return false;
    }
    if (number === 1) return true;

    if (number % 2 == 0) {
        return isNumberPowerOfTwo(number / 2);
    }
    return false;
};

console.log(isNumberPowerOfTwo(64));

// EP2024IR4543133 tcs ep number