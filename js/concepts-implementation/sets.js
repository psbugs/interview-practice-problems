


let sets = new Set([1, 2, 3, 4, 5, 1]);
// remove all duplicates items 

// add the new element to the set
sets.add(12);

// check the presence of the key
let isKeyPresent = sets.has(0)

console.log(sets.delete(1));
console.log(isKeyPresent);

// get the size of a set
console.log(sets.size)

// clear the set
// sets.clear()

console.log(sets)


// Application of set include

let roles = new Set(['admin', 'user', 'instructor']);

let role = 'instructor';

let isRoleExists = roles.has(role)
console.log(isRoleExists);

// To keep track various pages visited by users uniquely