let inputStr = 'name of my family is sunhare';
let outStr = '';
for (let i= inputStr.length-1; i>=0;i-- ){
    outStr = outStr + inputStr[i];
}
console.log('outStr',outStr);