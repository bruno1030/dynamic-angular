import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common'; // Required for *ngFor and other Angular features
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent], // Import CommonModule and RouterModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    { id: 1, title: 'Soccer Ball', value: 29.99, imageUrl: 'assets/images/soccer-ball.jpg' },
    { id: 2, title: 'Basketball', value: 19.99, imageUrl: 'assets/images/basketball.jpg' },
    { id: 3, title: 'Tennis Racket', value: 49.99, imageUrl: 'assets/images/tennis-racket.jpg' },
  ];
  
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    // Initialize products from service
    this.products = this.productService.getMockedProducts();
  }
  
  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  openProductPage(product: any): void {
    console.log('Opening product page for:', product.title);
    this.router.navigate(['/product', product.id], {
      state: { product } // Pass the product object to the ProductComponent
    });
  }

}
