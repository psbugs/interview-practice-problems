// function removeDuplicates(arr) {
//   let { length } = arr;
//   let set = new Set();

//   for (let item of arr) {
//     if (!set.has(item)) {
//       set.add(item);
//     }
//   }
//   console.log('set', Array.from(set));
//   return Array.from(set)
// }
// // removeDuplicates([1, 2, 2, 3, 4, 4])
// // removeDuplicates([true,false,true])
// // removeDuplicates(["a","a","b","c"])
// // removeDuplicates(["1",1,"1"])
// module.exports = removeDuplicates;


// function removeDuplicates(items) {
//   let temp=[];
//   for(let item of items){
//     if(!temp.includes(item)){
//         temp.push(item);
//     }
//   }
//   return temp
// }
// console.log(removeDuplicates(['a','b','c','a']));

function removeDuplicates(items){
  // sort the items
  items = items.sort((a,b)=> a-b);


  let i = 0;
  for (let j = 1; j < items.length; j++) {
    if (items[i] !== items[j]) {
      i++;
      items[i] = items[j];
    }
  }

// Truncate the array to only unique values
items.length = i + 1;
  console.log('items',items);

return items;
};
removeDuplicates(['a','b','c','d','e','a']);