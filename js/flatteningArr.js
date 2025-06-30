function flatteningArray(arr,temp=[]){
    for (let item of arr){
        if(Array.isArray(item)){
            flatteningArray(item,temp);
        }else {
            temp.push(item)
        }
    };
    return temp;

};

const inputArr = [1,2,3,4,[5,6,8,[9,10,[12,[23]]]]];

console.log('result from flattened arr is',flatteningArray(inputArr))
// [
//    1, 2, 3,  4,  5,
//    6, 8, 9, 10, 12,
//   23
// ]