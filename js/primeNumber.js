// 2,3,5,7,9,11,13,17,19


function isCheckPrime(num){
    if(num == 2) return true;
    if(num < 2) return false;
    if(num%2 == 0) return false;

    for(let i=3;i<Math.sqrt(num);i+=2){
        if(num%i == 0) return false
    }
    return true;
};

function generatePrimeNos(limit){
    let result = 0;
    let count = 0

    for(let i=2; count< limit;i++){
        if(isCheckPrime(i)){
            count++;
            result = i;
        }
    }
   return result;
};



console.log('nth prime be ',generatePrimeNos(15));