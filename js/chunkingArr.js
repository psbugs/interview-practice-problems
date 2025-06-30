const numbers = [2,4,6,8,10,1,3,5,7,9,11];

function chunkingArray(nums,target){
    let n = target;
    let temp = []
    for(let i=0;i<nums.length;i+=n){
        temp.push(nums.slice(i,i+n))
    }
    return temp
};

console.log('chunkingArray',chunkingArray(numbers,3))