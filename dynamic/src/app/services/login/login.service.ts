import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/product';
  
  constructor(private http: HttpClient) { }
    
  // public validateLogin(username: string, password: string): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  validateLogin(username: string, password: string){
    return false;
  }
}
