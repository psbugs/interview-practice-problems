Array.prototype.reduce = function(callback,initialValue){
let acc = initialValue;
for(let i=0;i<this.length;i++){
    acc = callback(this[i]);
};
return acc;
};