let nums = [1,2,3,4]

let productsArr=[];
for(let i=0;i<nums.length;i++){
    let product=1;
    for(let j=0;j<nums.length;j++){
        if(i !== j){
        product = product * nums[j]    
        }
    }
    productsArr.push(product);
}
console.log('productsArr',productsArr)
