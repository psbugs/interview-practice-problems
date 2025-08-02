function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
      return counter
    },
    decrement: function () {
      counter--;
      return counter
    },
    getCounter: function () {
      return counter;
    }
  }
}

let counterObj = createCounter();
console.log(counterObj.increment());
console.log(counterObj.increment());
console.log(counterObj.increment());
console.log(counterObj.decrement());
console.log(counterObj.getCounter());


function ShoppingCart() {
  let cart = [];

  return {
    addItem: function (item) {
      cart.push(item);
      console.log(`${item} added to cart.`);
    },
    getCart: function () {
      return [...cart];
    }
  };
}

const cartApp = ShoppingCart();

cartApp.addItem("Apple"); // Apple added to cart
cartApp.addItem("Banana");

console.log(cartApp.getCart()); // [ "Apple", "Banana" ]


function authManager() {
  let isAuthenticated = false;

  return {
    login() {
      isAuthenticated = true;
      console.log("User logged in");
    },
    logout() {
      isAuthenticated = false;
      console.log("User logged out");
    },
    checkAuth() {
      return isAuthenticated;
    }
  };
}

const auth = authManager();
auth.login(); // User logged in
console.log(auth.checkAuth()); // true




function Cart() {
  let carts = [];
  return {
    add: function (item) {
      carts.push(item);
      return 'Item is added to the cart';
    },
    remove: function (id) {
      console.log('id', id);
      carts = carts.filter((item) => item.id !== id);

    },
    getCart: function () {
      return carts;
    }
  }
};

let cart = Cart();

cart.add({ id: 1, productName: 'iphone13', price: 2 })
cart.add({ id: 2, productName: 'cooler', price: 3 })
cart.add({ id: 3, productName: 'hplaptop', price: 4 });

console.log(cart.getCart())

cart.remove(3);

console.log(cart.getCart())