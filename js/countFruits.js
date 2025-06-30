function countFruits(arr,key){
    let obj={}
    for (let item of arr){
        obj[item] = (obj[item] || 0) + 1;
    }
    return obj[key];
};


let inputFruits = ['banana','orange','mango','strawberry','mango'];
console.log('countFruits',countFruits(inputFruits,'mango'));

// count the frequency of particular items from the container