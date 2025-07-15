let number = 1236789;
let rev = 0;
while(number > 0){
    let rem = number%10;
    rev = rev*10 + rem;
    number = Math.floor(number/10);
}
console.log(rev);

// let a = ['abc', 'ab10c', 'a10bc', 'bcd'];