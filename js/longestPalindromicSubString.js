let str = 'cbbd';
let n = str.length;
let temp =[];
for(let i=0;i<n;i++){
    for(let j=i+1;j<n+1;j++){
        let subStr= str.slice(i,j);
        if( subStr && subStr == subStr.split('').reverse().join('')){
            temp.push(subStr);
        }
    }
};

let maxPalindromeSubStr = temp.reduce((currentWord,nextWord)=>{
    return currentWord.length > nextWord.length ? currentWord : nextWord
},0);

console.log('maxPalindromeSubStr',maxPalindromeSubStr);