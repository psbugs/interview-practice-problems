
const obj = {a:1,name:"praveen",address:{city:'indore',postCode:'452010'}};

if(!this.JSON){
    this.JSON = {}
}
JSON.stringify1 = function(arg){
    // console.log('arg',arg)
    const seen = new WeakSet();
    console.log('seen',seen)

    if(typeof arg === "object"){
        if(seen.has(arg)){
            throw new TypeError('Error');
        }
        seen.add(arg)

        let keys = Object.keys(arg);
        let props = keys.map((key)=>{
        const strVal = stringifyHelper(arg[key])
        if(strVal !== 'undefined'){
            return `"${key}" : ${strVal}`
        }}).filter(Boolean)
    }
console.log('seen',seen)
}
console.log(JSON.stringify1(obj))