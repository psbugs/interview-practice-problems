let str = 'aaaaaaabbbbbbccccddddefabcxcddd'

function removeConsecutiveDuplicates(str){
    let result = str[0];
    for(let i=1;i<str.length;i++){
        if(str[i] !== str[i-1]){
            result += str[i];
        };
    };
    console.log(result);
};

console.log('remove consecutive o/p',removeConsecutiveDuplicates(str));