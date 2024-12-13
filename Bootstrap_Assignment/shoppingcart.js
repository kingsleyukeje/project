// Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotalItems() {
      return this.items.length;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(id) {
      this.items = this.items.filter(item => item.product.id !== id);
    }
  
    displayCartItems() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`);
      });
    }
  }
  
  // Testing the OOJ approach
  const product1 = new Product(1, 'Laptop', 1000);
  const product2 = new Product(2, 'Mouse', 20);
  const product3 = new Product(3, 'Keyboard', 50);
  
  const cart = new ShoppingCart();
  cart.addItem(new ShoppingCartItem(product1, 1));
  cart.addItem(new ShoppingCartItem(product2, 2));
  cart.addItem(new ShoppingCartItem(product3, 1));
  
  // Display cart
  cart.displayCartItems(); // Displays all items in the cart
  
  // Remove an item
  cart.removeItem(2); // Removes the Mouse
  
  // Display cart after removal
  cart.displayCartItems();
  