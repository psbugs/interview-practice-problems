const str = 'RLRRLLRLRL';

let balance = 0;
let count = 0;

for(let char of str) {
    if(char === 'R') {
        balance++; //1 2 1 1 
    }else if(char ==='L'){
        balance--; //0 1 0 0 0
    }
    
    if(balance == 0){
        count++; //1 2 3 4
    }
};

console.log('count',count);