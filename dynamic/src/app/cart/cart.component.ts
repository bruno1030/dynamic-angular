import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: any[] = [];

  constructor(private router: Router, private cartService: CartService){
    this.cart = this.cartService.getCart();  // Load cart data
  }

  removeItem(productId: number){
    this.cartService.removeFromCart(productId);
  }

  clearCart(){
    this.cartService.clearCart();
  }

  navigateToHome(){
    this.router.navigate(["/home"]);
  }
}
