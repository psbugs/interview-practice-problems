function createCounter(){
    let counter =0;
    return {
        increment : function(){
             counter++;
             return counter
        },
        decrement: function(){
             counter--;
             return counter
        },
        getCounter: function(){
            return counter;
        }
    }
}

let counterObj = createCounter();
console.log(counterObj.increment());
console.log(counterObj.increment());
console.log(counterObj.increment());