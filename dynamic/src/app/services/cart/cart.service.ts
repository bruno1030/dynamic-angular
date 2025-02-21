import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private snackBar: MatSnackBar) { }

  private cart = new BehaviorSubject<any[]>([]); // array to store cart items
  cart$ = this.cart.asObservable(); // Observable to listen the changes in the cart

  // get cart items
  getCart(){
    return this.cart;
  }

  // add item to cart
  addToCart(product: any, quantity: number){
    const currentCart = this.cart.value;
    // verify if the item is already in the cart
    const itemExists = currentCart.some(item => item.product.id === product.id);
    
    if (itemExists) {
      // update the quantity of an existing item
      for (let item of currentCart) {
        if (item.product.id === product.id) {
          item.quantity += quantity;
          break; // stop the loop, since the item was already found
        }
      }
    } else {
      // add a new item to the cart
      currentCart.push({ product, quantity });

      // Show notification in the Product Page saying that the product was added to the cart
      this.snackBar.open(`${product.title} added to cart!`, '', {
        duration: 3000, // Auto-close after 3 seconds
        panelClass: ['success-snackbar'], // Custom styling (optional)
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }

  // Remove item from cart
  removeFromCart(productId: number) {
    const currentCart = this.cart.value.filter(item => item.product.id !== productId);
    this.cart.next(currentCart);
  }

  // Clear the cart
  clearCart() {
    this.cart.next([]); // empties the cart and notifies the components
  }

}
