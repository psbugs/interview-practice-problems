function Animal(name) {
    this.name = name;
};

Animal.prototype.speak = function () {
    return `${this.name} animal speaks`;
};
// speak method can be accessible to other functions
// how we can do this we can do this with the help of prototypical inheritance

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
    return `${this.name} barks`;
};

let animalObj = new Animal("Dog");
let dogObj = new Dog('Bruno', 'African')
console.log(dogObj.speak())
console.log(dogObj instanceof Animal);
console.log(dogObj instanceof Dog);
