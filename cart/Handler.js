/** Add all the method related to Cart functionality Like Amazon */
class CartHandler {
    constructor() {
        this.cart = [];
    }

    addItem(item) {
        this.cart.push(item);
    }

    removeItem(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
    }

    updateItemQuantity(itemId, quantity) {
        this.cart = this.cart.map(item => 
            item.id === itemId ? { ...item, quantity } : item
        );
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    getCartItems() {
        return this.cart;
    }

    clearCart() {
        this.cart = [];
    }
}

module.exports = CartHandler;