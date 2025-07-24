// null coalscing operator

const age = 0;

console.log(age || 18); // 18 ❌ (because 0 is falsy)
console.log(age ?? 18); // 0 ✅ (because 0 is not null/undefined)

// optional chaining

let user ={
    name:'test'
}
console.log(user?.contact?.email)