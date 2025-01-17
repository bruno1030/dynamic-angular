import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule to use *ngIf
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any;

  quantity: number = 1;

  constructor(private router: Router) {
    // Access the passed state
    this.product = history.state.product || null;
  }

  navigateToHome(){
    this.router.navigate(["/home"]);
  }

  navigateToCart(){
    this.router.navigate(["/cart"]);
  }

  addToCart(){
    if(this.quantity < 1){
      alert("Please select a valid quantity");
      return;
    }

  }

}
