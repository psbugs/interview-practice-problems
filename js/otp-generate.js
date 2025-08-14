
// 0-9

let isAllowedDigits = true;
if (isAllowedDigits) {

    let otpLength = 4;
    let otpArr = [];

    for (let i = 0; i < otpLength; i++) {
        otpArr.push(Math.floor(Math.random() * 10))
    };
    let otp = otpArr.join('');

    console.log(otp);
} else {
    let otpLength = 6;
    let otpArr = [];

    // only allowed small case chars and upperCase chars 
    // disallowed special characters
    const str = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < otpLength; i++) {
        let randomChar = str[Math.floor(Math.random() * 10)];
        if (i % 2 == 0) {
            otpArr.push(randomChar)
        } else {
            otpArr.push(randomChar.toUpperCase())
        }
    };
    let otp = otpArr.join('');

    console.log(otp);
}