// Class and Object

class Product {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary
    }

    getProductDetails(){
        return `Product detail is ${this.id} ${this.name} ${this.salary}`
    }
};

let p = new Product(1,'laptop',89000);
let details = p.getProductDetails();
console.log('details',details);

// Encapsulation
class User {
    #password;

    constructor(userName,pass){
        this.userName = userName;
        this.#password = pass;
    };

    greet(){
        return `Hello ${this.userName}`
    }
    validatePassword(pass){
        return this.#password === pass;
    }
};

let user = new User('ps_bugs','Interview2025@@');

let arePasswordEquals = user.validatePassword('Interview2025@@')
console.log('arePassword equals',arePasswordEquals);

// Abstraction
class PaymentGateway {
    constructor(amount){
        this.amount = amount
    }
    makePayment(){
        this.#connectBank();
        console.log('Your payment is in process of amount',this.amount)
    }

    #connectBank(){
        console.log(`Connecting to bank`);
    }
};

let payment = new PaymentGateway(1000);
payment.makePayment();


// Inheritance
class Admin extends User {
    constructor(name,role){
        super(name);
        this.role = role;
    }

    manage(){
        return `Admin with name ${this.userName} with role as ${this.role}`;
    }
};

let admin = new Admin('Praveen','Instructor');
let res1 = admin.greet();    
console.log('res1',res1);
let res2 = admin.manage();
console.log('res2',res2);

// Polymorphism
class UserNew {
  accessPage() {
    return "Accessing basic dashboard";
  }
}

class AdminNew extends UserNew {
  accessPage() {
    return "Accessing admin dashboard";
  }
}

class Guest extends UserNew {
  accessPage() {
    return "Accessing limited features";
  }
}

const users = [new UserNew(), new AdminNew(), new Guest()];
users.forEach(u => console.log(u.accessPage()));