import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/user/by-username';
    
  constructor(private http: HttpClient) { }
    
  getUserInfo(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${username}`);
  }

}
