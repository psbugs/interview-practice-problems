const obj1 = {userName:'Praveen',address:{city:'Indore',age:27}};
const obj2 = {userName:'Praveen',address:{city:'Indore',age:27}};

function deepEquals(obj1,obj2){
    let obj1KeysLength = Object.keys(obj1).length;
    let secondObjKeysLength = Object.keys(obj2).length;
    if(obj1 == obj2) return true;
    
    if(obj1KeysLength !== secondObjKeysLength) return false;

    if(typeof obj1 !== "object" || obj1 ==null || typeof obj2 !== "object" || obj2 == null){
        return false;
    };

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    for (let key of keys1) {
    if (!keys2.includes(key)) return false;

    const val1 = obj1[key];
    const val2 = obj2[key];

    const areObjects = typeof val1 === 'object' && val1 !== null &&
                       typeof val2 === 'object' && val2 !== null;

    if (areObjects) {
      if (!deepEquals(val1, val2)) return false;
    } else {
      if (val1 !== val2) return false;
    }
  }

    return true
};

console.log('check two objects are equal or not',deepEquals(obj1,obj2));