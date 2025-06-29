const array = [1,2,3,4,5];
const length = array.length;
for(let i=0;i<length;i++){
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]] = [array[j],array[i]];
}
console.log(array)