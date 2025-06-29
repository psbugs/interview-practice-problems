const array = [0,1,2,5,0,6,0,9];
let count=0;
for(let i=0;i<array.length;i++){
    if(array[i] !== 0){   
        array[count] = array[i]; 
        count++;
    }
};

for(let i=count;i<array.length;i++){
    array[i] = 0;
}
console.log(array)