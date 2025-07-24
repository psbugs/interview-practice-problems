let stars = '*****     ';

let n = stars.length;


function printStars(frequency){
    return stars.slice(5-frequency,n-frequency);
};

console.log(printStars(5));
console.log(printStars(4));

console.log(printStars(3));
console.log(printStars(2));
console.log(printStars(1));