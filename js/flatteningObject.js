const input = {
  user: {
    name: "Praveen",
    address: {
      city: "Indore",
      zip: 452001
    }
  },
  active: true
};


const flattenObject = (inputObj, prefix='',outObj={})=> {
        for(let [key,value] of Object.entries(inputObj)){
            let prop = prefix ? `${key}.${prefix}` : key;
            if(typeof value == "object"){
                flattenObject(inputObj[key],prop,outObj)
            }else {
                outObj[prop] = inputObj[key]; 
            }
        }
        return outObj;
};

const flattened = flattenObject(input);
console.log("flattened",flattened);