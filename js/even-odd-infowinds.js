const array = [1,2,3,4,5,6,7,8,9];
// remove odd values from original arrays 
function computeOdd(array){
    let removedOddItems = array.filter((item,index)=> item%2 !== 0);
    let evenFromOriginal = array.filter((item,index)=> item%2 == 0);
    let computedEvensFromOdds = removedOddItems.map((item)=> item+1);
    return [...evenFromOriginal,...computedEvensFromOdds];  
};

let response = computeOdd(array);
console.log('final function response',response);


// I want to write how you can store your todo item using redux toolkit