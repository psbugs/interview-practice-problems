const nums = [2,7,11,15];
const target =9;
function computeTwoSum(n,t){
    let indexes=[];
    for(let i=0;i<n.length;i++){
        for(let j=1;j<n.length;j++){
            if(n[i] + n[j] == t){
                indexes.push(i,j);
                break;
            }
        }
    }
    return indexes;
};

console.log('response from compute sum',computeTwoSum(nums,target));