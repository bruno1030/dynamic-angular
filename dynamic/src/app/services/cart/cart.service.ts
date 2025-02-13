import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private snackBar: MatSnackBar) { }

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

      // Show notification in the Product Page saying that the product was added to the cart
      this.snackBar.open(`${product.name} added to cart!`, '', {
        duration: 3000, // Auto-close after 3 seconds
        panelClass: ['success-snackbar'], // Custom styling (optional)
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
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
