import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to use *ngIf
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any;

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
}
