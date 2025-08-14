let numbers = [2,4,6,8,10];

Array.prototype.map = function(callback){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(callback(this[i],i));
    }
    return temp;
}

let mappedValues = numbers.map((item) => item*2);
console.log('mappedvalues',mappedValues);