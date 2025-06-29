function frequencyCounter(string){
    let outputObj = {};
    let array = string.trim().split('');
    array = array.filter((item)=> item !== ' ');
    for(let item of array){
        outputObj[item] = (outputObj[item] || 0) +1;
    }
    return outputObj
}

console.log(frequencyCounter('this is praveen'));