let student1 = {
    fName:'praveen',
    lName:'sunhare'
};

let student2 = {
    fName:'dheerendra',
    lName:'mandloi'
};

let commonMethod = function(city,age){
    return  `${this.fName} with surname ${this.lName} belongs to ${city} with age ${age}`;
};

let callRes = commonMethod.call(student1,'Indore',27);
console.log('callRes',callRes)

let applyRes = commonMethod.apply(student2,['Ujjain',28]);
console.log('applyRes',applyRes)


let bindedRes = commonMethod.bind(student1,'Mhow',29);
console.log(bindedRes());