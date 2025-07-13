
let arr = [1,2,3,4,5,6,7,8,9];


function sum(arr,n){
    if(n<=0) return 0;
    return arr[n-1] + sum(arr,n-1);
};

console.log('sum from the array numbers are',sum(arr,arr.length))