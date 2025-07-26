Array.prototype.customBind = function(context,...args1){
    let fn = this;
    return function (...args2){
        return fn.apply(context,[...args1,...args2])
    }   
};