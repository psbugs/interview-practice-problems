function greet(){
    console.log('Hy there i am greetings....');
};

function debounce(fn,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout =setTimeout(()=> fn.apply(this,args),delay);
    }    
};

let debouncedGreet = debounce(greet,2000);
debouncedGreet();