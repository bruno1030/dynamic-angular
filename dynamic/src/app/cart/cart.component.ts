import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cart: any[] = [];

  constructor(private router: Router, private cartService: CartService){}

  ngOnInit(){
    // subscribe to listen the changes in the cart
      this.cartService.cart$.subscribe(cart =>{
        this.cart = cart;
      })
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
