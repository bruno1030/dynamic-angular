import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/auth/login';
  
  constructor(private http: HttpClient) { }
    
  validateLogin(username: string, password: string): Observable<boolean> {
    
    const payload = { username, password };
    
    return this.http.post<boolean>(this.apiUrl, payload).pipe(
      map(response => !!response), // ensure boolean
      catchError(() => of(false)) // if error, treat as login failure
    );
  }
  
}
