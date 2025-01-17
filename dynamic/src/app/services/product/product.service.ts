import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes the service available app-wide
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }
  
  // Method to return products list
  public getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
