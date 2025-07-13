let paranthesisObj = {
    "{":"}",
    "(":")",
    "[":']'
};

let s = "()[]{}";
let stack = [];
for(let char of s){
    if(char == "}" || char == "(" || char == "["){
        stack.push(char);
    }else {
        if(stack.pop() !== paranthesisObj[char]){
            return false;
        }
    }    
}

console.log(stack.length === 0);
