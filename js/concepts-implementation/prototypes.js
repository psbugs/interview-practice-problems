// Prototye implementation
class Animal {
    constructor(name) {
        this.name = name;
    }
}

Animal.prototype.speak = function () {
    console.log(`Hey there I am ${this.name} a dog`);
};

let animal = new Animal("Lazy-dog");
animal.speak();

// function Animal(){
//     this.name = "Bruno";
// };

// let animal = new Animal();
// let speakRes = animal.speak();

// speakRes;