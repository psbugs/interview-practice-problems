function Cart() {
    let cartItems = [];
    return {
        addItemToCart(item) {
            cartItems.push(item);
        },
        removeItemFromCart() {
            cartItems.pop();
        },
        getCartItems() {
            return cartItems
        }
    }
};

let cart = Cart();
cart.addItemToCart('Ihopne 16');
cart.addItemToCart('Samsung smart television');
cart.addItemToCart('Boat headphone');

console.log(cart.getCartItems())
cart.removeItemFromCart()
console.log(cart.getCartItems())