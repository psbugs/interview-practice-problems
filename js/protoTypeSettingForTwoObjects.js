function Student(name){
    this.name = name;
}

// Two separate prototypes
const protoA = {
    school: 'School A',
    sayHello() {
        return `Hello ${this.name} from ${this.school}`;
    }
};

const protoB = {
    school: 'School B',
    sayHello() {
        return `Hello ${this.name} from ${this.school}`;
    }
};

let s1 = new Student('Kinshu');
let s2 = new Student('Ishika');

// Assign custom prototype to each instance
Object.setPrototypeOf(s1, protoA);
Object.setPrototypeOf(s2, protoB);

// Testing
console.log(s1.sayHello()); // Hello Kinshu from School A
console.log(s2.sayHello()); // Hello Ishika from School B
