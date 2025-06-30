function removeDuplicates(arr) {
  let temp=[];
  for(let item of arr){
    if(!temp.includes(item)){
        temp.push(item);
    }
  }
  return temp
}
console.log(removeDuplicates(['a','b','c','a']));