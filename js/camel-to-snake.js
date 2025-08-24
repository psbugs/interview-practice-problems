

let value = "removeDuplicatesFromTheString";
// user_name;

// remeber the regular expression for this particular problem
const camelToSnake = s => s.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();

console.log(camelToSnake(value));