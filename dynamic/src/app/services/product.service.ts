import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available app-wide
})
export class ProductService {

  constructor() { }

  // Method to return mocked product data
  public getMockedProducts() {

    const products: any[] = [
      { id: 1, title: 'Soccer Ball', value: 29.99, imageUrl: 'assets/images/soccer-ball.jpg', description: 'Soccer Ball description' },
      { id: 2, title: 'Basketball', value: 19.99, imageUrl: 'assets/images/basketball.jpg', description: 'Basketball description' },
      { id: 3, title: 'Tennis Racket', value: 49.99, imageUrl: 'assets/images/tennis-racket.jpg', description: 'Tennis Racket description' },
    ];

    return products;
  }
}
