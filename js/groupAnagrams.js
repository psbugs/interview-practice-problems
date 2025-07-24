const items  = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const items =["a"]
let tempObj = {};
for(let i=0;i<items.length;i++){
    let sortedItem = items[i].split('').sort().join('');
    if(!tempObj[sortedItem]){
      tempObj[sortedItem] = [items[i]];
    }else {
        tempObj[sortedItem].push(items[i]);
    }
}

const values = Object.values(tempObj);

console.log(values);