const num1 = [1,2,3];
const num2 = [2,3,4];
// using extra space
let set = [...new Set([...num1,...num2])];


var intersectedItems = []
for(let item of num2){
    num1.includes(item) && intersectedItems.push(item);
}

let s = new Set(num1);
let filteredArr = num2.filter((i)=> s.has(i))