let str = 'I am String';

function stringReverseWithProperSpace(str){
    let chars = str.split('');
    let letters = chars.filter((c)=> c!== ' ');
    let reversedLetters = letters.filter((l)=> l !==' ').reverse();
    
    let result='';
    let reversedIndex = 0;
    
    for(let i=0;i<chars.length;i++){
        if(chars[i] === ' '){
            result += ' ';
        }else {
            result += reversedLetters[reversedIndex++];
        }
    }
    return result;
    
};
console.log('stringReverseWithProperSpace',stringReverseWithProperSpace(str));
// g ni rtSmaI be the output