import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: any[] = []; // array to store cart items

  // get cart items
  getCart(){
    return this.cart;
  }

  // add item to cart
  addToCart(product: any, quantity: number){
    // verify if the item is already in the cart
    const itemExists = this.cart.some(item => item.product.id === product.id);
    
    if (itemExists) {
      // update the quantity of an existing item
      for (let item of this.cart) {
        if (item.product.id === product.id) {
          item.quantity += quantity;
          break; // stop the loop, since the item was already found
        }
      }
    } else {
      // add a new item to the cart
      this.cart.push({ product, quantity });
    }
  }

  // Remove item from cart
  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }

  // Clear the cart
  clearCart() {
    this.cart = [];
  }

}
