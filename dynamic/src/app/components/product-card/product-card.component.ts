import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,   // This indicates the component is standalone
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'] // Fixed typo (styleUrl -> styleUrls)
})
export class ProductCardComponent {
  @Input() product: any;   // Input to receive product data from the parent component

  @Output() productClicked = new EventEmitter<any>(); // Event emitter for product click

  onProductClick() {
    this.productClicked.emit(this.product); // Emit the clicked product to the parent component
  }
}
