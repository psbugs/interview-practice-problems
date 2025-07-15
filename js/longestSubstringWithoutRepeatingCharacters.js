var input = 'abcabcbb';

function allUnique(str){
    let set = new Set();
    for (let char of str){
        if(set.has(char)) return false;
        set.add(char)
    }
    return true
};

function longestSubstring(str){
    let maxLength = 0;

    for(let i=0;i<str.length;i++){

        for(let j=i+1;j<str.length;j++){
            let subStr = str.substring(i,j);
            if(allUnique(subStr)){
                maxLength = Math.max(maxLength,subStr.length);
            }
        }
    }
    return maxLength
};

console.log('Result',longestSubstring(input));