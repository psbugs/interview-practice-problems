function once(fn){
    let isCalled = false;
    let result = null;
    return function(...args){
           if(!isCalled){
               isCalled = true;
               result = fn.apply(this,args)
           }
           return result;
    };
};

function demo(){
    console.log('hello i am hello')
};

let onceFuncRes = once(demo);
onceFuncRes();
onceFuncRes();