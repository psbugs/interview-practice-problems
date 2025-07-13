let a=[1,2,3];
let b=[1,2,4]


let mergedArr =[];

for(let item of a){
    mergedArr.push(item);
};


for(let item of b){
    mergedArr.push(item);
};

console.log('mergedArr',mergedArr)

for(let i=0;i<mergedArr.length;i++){
    for(let j=0;j<mergedArr.length-i-1;j++){
        if(mergedArr[j] > mergedArr[j+1]){
            let temp = mergedArr[j];
            mergedArr[j] = mergedArr[j+1];
            mergedArr[j+1] = temp;
        }
    }
}

console.log('after sorting',mergedArr)