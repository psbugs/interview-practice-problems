

function throttle(fn,delay){
    let lastCall = 0;
    return function (...args){
        const now = Date.now();
        if(now-lastCall >= delay){
            lastCall = now;
        }
        fn.apply(this,args)
    }
}

let throttledFunc = throttle(()=> console.log('Executing at 1000'),2000);
console.log(throttledFunc());