
// 0-9

let otpLength = 4;
let otpArr = [];

for (let i = 0; i < otpLength; i++) {
    otpArr.push(Math.floor(Math.random() * 10))
};
let otp = otpArr.join('');

console.log(otp);